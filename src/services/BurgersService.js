import { fakeDB } from "../db/FakeDB.js"




class BurgersService {
    async updateBurger(idToDelete, burgerProperties) {
        const burgerToUpdate = await fakeDB.Burger.findById(idToDelete)
        if (burgerToUpdate == null) throw new Error(`No burger with the id of: ${idToDelete}`)
        burgerToUpdate.set(burgerProperties)
        await burgerToUpdate.save()
        console.log(burgerToUpdate);
    }
    async deleteBurger(idToDelete) {
        const burgerToDestroy = await fakeDB.Burger.findById(idToDelete)
        console.log("gotcha", burgerToDestroy);
        if (burgerToDestroy == null) throw new Error(`No burger with the id of: ${idToDelete}`)
        await burgerToDestroy.deleteOne()
        return `deleted the burger: ${burgerToDestroy.name}`
    }
    async makeBurger(burgerData) {
        const burger = await fakeDB.Burger.create(burgerData)
        return burger
    }
    async getBurgerFromDb() {
        const burgers = await fakeDB.Burger.find() // in this case, the Mongoose find, finds ALL, where typically JS find on gets one
        console.log(burgers);
        return burgers
    }
}

export const burgersService = new BurgersService()