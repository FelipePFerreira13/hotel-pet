"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const postgresql_1 = require("@mikro-orm/postgresql");
const migrations_1 = require("@mikro-orm/migrations");
const seeder_1 = require("@mikro-orm/seeder");
exports.default = (0, postgresql_1.defineConfig)({
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    clientUrl: process.env.DATABASE_URL,
    driverOptions: {
        ssl: process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false },
    },
    extensions: [migrations_1.Migrator, seeder_1.SeedManager],
});
//# sourceMappingURL=mikro-orm.config.js.map