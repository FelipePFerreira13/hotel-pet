import { Migration } from '@mikro-orm/migrations';

export class Migration20260827000000 extends Migration {

  override name = 'Migration20260827000000';

  override up(): void | Promise<void> {
    this.addSql(`create table "users" ("id" serial primary key, "email" varchar(255) not null, "name" varchar(255) not null, "bio" varchar(255) null, "created_at" timestamptz not null, "updated_at" timestamptz not null);`);
    this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
