import mongoose from "mongoose";
import { BaseUser } from "./BaseUser.model.js";

const AdminSchema = mongoose.Schema({
    admin_id: { type: String, required: false}
});

const Admin = BaseUser.discriminator('Admin', AdminSchema);
export { Admin };

