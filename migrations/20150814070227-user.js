var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('user', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: 'string',
    nickname: 'string',
    lastLoginAt: {type: 'datetime', notNull: true},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('user', 'user_last_login_at_index', 'lastLoginAt', callback)
  });
};

exports.down = function(db, callback) {
  db.dropTable('user', callback);
};
