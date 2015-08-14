var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ideaSheetComment', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    ideaSheetId: {type: 'int', notNull: true},
    userId: 'int',
    comment: {type: 'text', notNull: true},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('ideaSheetComment', 'idea_sheet_comment_idea_sheet_id_index', 'ideaSheetId', function(){
      db.addIndex('ideaSheetComment', 'idea_sheet_comment_user_id_index', 'userId', callback);
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('ideaSheetComment', callback);
};
