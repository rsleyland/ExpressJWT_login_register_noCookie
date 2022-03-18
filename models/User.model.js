import mongoose from "mongoose";
import { BaseUser } from "./BaseUser.model.js";

const UserSchema = mongoose.Schema({
    username: { type: String, required: true}
});

const User = BaseUser.discriminator('User', UserSchema);
export { User };

