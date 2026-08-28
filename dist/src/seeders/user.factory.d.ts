import { Factory } from '@mikro-orm/seeder';
import { User } from "../users/entities/user.entity";
export declare class UserFactory extends Factory<User> {
    model: typeof User;
    definition(): Partial<User>;
}
