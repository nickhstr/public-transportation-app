var dbPromise = idb.open('bart-db', 1, function(upgradeDB) {
  upgradeDB.createObjectStore('trips-data');
});

var keyValStore = {
  get: function(key) {
    return dbPromise.then(function(db) {
      return db.transaction('trips-data')
        .objectStore('trips-data').get(key);
    });
  },
  set: function(key, val) {
    return dbPromise.then(function(db) {
      var tx = db.transaction('trips-data', 'readwrite');
      tx.objectStore('trips-data').put(val, key);
      return tx.complete;
    });
  },
  delete: function(key) {
    return dbPromise.then(function(db) {
      var tx = db.transaction('trips-data', 'readwrite');
      tx.objectStore('trips-data').delete(key);
      return tx.complete;
    });
  }
};