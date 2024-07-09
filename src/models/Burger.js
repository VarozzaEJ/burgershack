import { Schema } from "mongoose";



export const BurgerSchema = new Schema({
    // name: String,
    // picture: String,
    // age: Number possible but not good options
    name: { type: String, maxLength: 25, required: true },
    price: { type: Number, max: 100, min: 0, required: true },
})