var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('honeycombBoard', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: {type: 'int'},
    mstEventId: {type: 'int'},
    theme: {type: 'string'},
    columnCount: {type: 'int', notNull: true, default: 1},
    rowCount: {type: 'int', notNull: true, default: 1},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('honeycombBoard', 'honeycomb_board_user_id_index', 'userId', function(){
      db.addIndex('honeycombBoard', 'honeycomb_board_mst_event_id_index', 'mstEventId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('honeycombBoard', callback);
};
