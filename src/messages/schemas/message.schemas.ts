import { Schema } from "mongoose";

export const UserSchema = new Schema({
    title: String,
    text: String
});