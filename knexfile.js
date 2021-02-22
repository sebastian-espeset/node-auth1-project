// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./dev.sqlite3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys=on", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },

    production: {
      client: "pg",
      connection: pgConnection,
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        directory: "./database/migrations",
      },
      seeds: {
        directory: "./database/seeds",
      },
    },
  },
};
