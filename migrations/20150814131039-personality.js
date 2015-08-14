var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('personality', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: {type: 'int', notNull: true},
    emailAddress: {type: 'string', notNull: true},
    password: 'string',
    imagePath: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('personality', 'personality_user_id_index', 'userId', function(){
      db.addIndex('personality', 'personality_email_address_index', 'emailAddress', true, callback)
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('personality', callback);
};
