import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router.get('', this.getBurgerFromDb)
        this.router.post('', this.makeBurger)
        this.router.delete('/:burgerId', this.deleteBurger)
        this.router.put('/:burgerId', this.updateBurger)
    }

    async getBurgerFromDb(request, response, next) {
        try {
            console.log("Burger");
            console.log(response);
            const burgers = await burgersService.getBurgerFromDb()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async makeBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.makeBurger(burgerData)
            console.log(burger);
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(request, response, next) {
        try {
            const idToDelete = request.params.burgerId
            console.log(idToDelete);
            const message = await burgersService.deleteBurger(idToDelete)
            response.send(message)

        } catch (error) {
            next(error)
        }
    }

    async updateBurger(request, response, next) {
        try {
            const burgerProperties = request.body
            const idToDelete = request.params.burgerId
            console.log(idToDelete);
            const body = await burgersService.updateBurger(idToDelete, burgerProperties)
            response.send(body)
        } catch (error) {
            next(error)
        }
    }
}