var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
   db.createTable('mstEventApi', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    mstApiId: {type: 'int', notNull: true},
    mstEventId: {type: 'int', notNull: true},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('mstEventApi', 'mst_event_api_mst_api_od_index', 'mstApiId', function(){
      db.addIndex('mstEventApi', 'mst_event_api_mst_event_id_index', 'mstEventId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('mstEventApi', callback);
};
