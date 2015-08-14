var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('ideaSheet', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    userId: {type: 'int', notNull: true},
    mstEventId: 'int',
    teamId: 'int',
    resourceType: 'string',
    resourceId: 'int',
    title: 'string',
    description: {type: 'text', notNull: true},
    imagePath: 'string',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('ideaSheet', 'idea_sheet_user_id_index', 'userId', function(){
      db.addIndex('ideaSheet', 'idea_sheet_mst_event_id_index', 'mstEventId', function(){
        db.addIndex('ideaSheet', 'idea_sheet_team_id_index', 'teamId',  function(){
          db.addIndex('ideaSheet', 'idea_sheet_resource_type_id_index', ['resourceType', 'resourceId'], callback);
        });
      });
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('ideaSheet', callback);
};
