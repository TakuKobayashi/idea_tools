var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('mstEvent', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: {type: 'string', notNull: true},
    url: 'string',
    startAt: 'datetime',
    endAt: 'datetime',
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('mstEvent', 'mst_event_start_at_index', 'startAt', function(){
      db.addIndex('mstEvent', 'mst_event_end_at_index', 'endAt', function(){
        db.addIndex('mstEvent', 'mst_event_title_index', 'title', callback);
      });
    });
  });
};

exports.down = function(db, callback) {
  db.dropTable('mstEvent', callback);
};
