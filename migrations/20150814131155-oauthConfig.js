var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('oauthConfig', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: {type: 'int', notNull: true},
    oathType: {type: 'string', notNull: true},
    sid: {type: 'string', notNull: true},
    token: {type: 'string', notNull: true},
    tokenSecret: 'string',
    expiredAt: 'datetime',
    userName: 'string',
    imagePath: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('oauthConfig', 'oauth_config_user_id_oauth_type_index', ['userId', 'oathType'], true, function(){
      db.addIndex('oauthConfig', 'oauth_config_sid_index', 'sid', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('oauthConfig', callback);
};
