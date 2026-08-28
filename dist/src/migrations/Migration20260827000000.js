"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260827000000 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260827000000 extends migrations_1.Migration {
    name = 'Migration20260827000000';
    up() {
        this.addSql(`create table "users" ("id" serial primary key, "email" varchar(255) not null, "name" varchar(255) not null, "bio" varchar(255) null, "created_at" timestamptz not null, "updated_at" timestamptz not null);`);
        this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);
    }
    down() {
        this.addSql(`drop table if exists "users" cascade;`);
    }
}
exports.Migration20260827000000 = Migration20260827000000;
//# sourceMappingURL=Migration20260827000000.js.map