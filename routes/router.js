const express = require('express')
const productController = require('../controllers/productController')
const router = new express.Router()
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

//get all products
router.get('/all-products',productController.getAllProductsController)

//view product 
router.get('/:id/view-product',productController.getAProductController)

//register
router.post('/register',userController.registerController) 

//login
router.post('/login',userController.loginController) 

//addtowishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)

//getallwishlistproducts
router.get("/get-wishlist",jwtMiddleware, wishlistController.getWishlist)

//removefromwishlist
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)

//addtocart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)

//getcart
router.get("/get-cart",jwtMiddleware, cartController.getCart)

//removecarts item
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItem)

//empty cart
router.delete("/empty-cart",jwtMiddleware, cartController.emptyCart)

//increment cart
router.get("/cart/:id/increment",jwtMiddleware, cartController.incrementCart)

//decrement cart quantity 
router.get("/cart/:id/decrement",jwtMiddleware, cartController.decrementCart)

module.exports = router