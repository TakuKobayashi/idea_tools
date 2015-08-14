var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('honeycombHole', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    honeycombBoardId: {type: 'int', notNull: true},
    columnPosition: {type: 'int', notNull: true, default: 0},
    rowPosition: {type: 'int', notNull: true, default: 0},
    word: {type: 'string'},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('honeycombHole', 'honeycomb_hole_board_id_index', 'honeycombBoardId', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('honeycombHole', callback);
};
