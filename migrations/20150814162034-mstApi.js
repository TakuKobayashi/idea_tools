var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('mstApi', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: {type: 'string', notNull: true},
    description: 'text',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('mstApi', 'mst_api_name_index', 'name', callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable('mstApi', callback);
};
