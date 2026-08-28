"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeeder = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const user_factory_1 = require("./user.factory");
class DatabaseSeeder extends seeder_1.Seeder {
    async run(em) {
        new user_factory_1.UserFactory(em).make(10);
    }
}
exports.DatabaseSeeder = DatabaseSeeder;
//# sourceMappingURL=database.seeder.js.map