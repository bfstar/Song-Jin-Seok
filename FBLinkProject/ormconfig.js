const  { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "test",
  entities: [
    './schemas/*.js'
  ],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  logging: true
};