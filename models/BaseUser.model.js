import mongoose from "mongoose";

const BaseUserSchema = mongoose.Schema({
    first_name: { type: String, required: true, minLength: 2},
    last_name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}    
}, {timestamps: true});

const BaseUser = mongoose.model('BaseUser', BaseUserSchema);
export { BaseUser };