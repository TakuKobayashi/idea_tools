var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('useApi', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    ideaSheetId: {type: 'int', notNull: true},
    userId: 'int',
    mstApiId: 'int',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('useApi', 'use_api_idea_sheet_id_index', 'ideaSheetId', function(){
      db.addIndex('useApi', 'use_api_user_id_index', 'userId', function(){
      	db.addIndex('useApi', 'use_api_mst_api_id_index', 'mstApiId', callback);
      });
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('useApi', callback);
};
