const functions = require('firebase-functions');
const algoliasearch = require("algoliasearch");
const admin = require('firebase-admin');
admin.initializeApp();

const client = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
);

const ALGOLIA_ITEM_INDEX = "test_items";

exports.itemsNewEntry = functions.firestore.document(`/items/{itemId}`)
.onCreate((snap, context) => {
        const index = client.initIndex(ALGOLIA_ITEM_INDEX);
        const data = snap.data();
        data.objectID = context.params.itemId;
        return index.saveObject(data);
      });

exports.itemsUpdate = functions.firestore.document(`/items/{itemId}`)
.onUpdate((change, context) => {
        const index = client.initIndex(ALGOLIA_ITEM_INDEX);
        const data = change.after.data();
        data.objectID = context.params.itemId;
        return index.saveObject(data)
        });
      
exports.itemsDelete = functions.firestore.document(`/items/{itemId}`)
.onDelete((snap, context) => {
        const index = client.initIndex(ALGOLIA_ITEM_INDEX);
        const objectID = context.params.itemId;
        return index.deleteObject(objectID)
      });
      