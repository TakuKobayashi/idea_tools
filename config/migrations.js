module.exports.migrations = {
  // connection name matches a field from config/connections.js
  connection: 'someMysqlServer',
  table: 'schema_migrations',
  migrationsDir: 'migrations'
};