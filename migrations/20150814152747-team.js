var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('team', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    mstEventId: 'int',
    name: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('team', 'team_mst_event_id_index', 'mstEventId', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('team', callback);
};
