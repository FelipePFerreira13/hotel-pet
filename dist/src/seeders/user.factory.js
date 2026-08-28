"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const faker_1 = require("@faker-js/faker");
const user_entity_1 = require("../users/entities/user.entity");
class UserFactory extends seeder_1.Factory {
    model = user_entity_1.User;
    definition() {
        return {
            name: faker_1.faker.person.fullName(),
            email: faker_1.faker.internet.email(),
            bio: faker_1.faker.lorem.sentence(),
        };
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.factory.js.map