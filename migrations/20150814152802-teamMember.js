var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('teamMember', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: {type: 'int', notNull: true},
    teamId: {type: 'int', notNull: true},
    leader: {type: 'boolean', notNull: true, default: false},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('teamMember', 'team_member_user_id_index', 'mstEventId', function(){
      db.addIndex('teamMember', 'team_member_team_id_index', 'teamId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('teamMember', callback);
};
