import mongoose from 'mongoose'
import { BurgerSchema } from '../models/Burger.js'

class FakeDB {
    Burger = mongoose.model('Burger', BurgerSchema)
}

export const fakeDB = new FakeDB()