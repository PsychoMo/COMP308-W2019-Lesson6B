let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

router.get("/about", indexController.displayAboutPage);

router.get("/products", indexController.displayProductsPage);

router.get("/services", indexController.displayServicePage);

router.get("/contact", indexController.displayContactPage);

/** GET - displays the Login Page */
router.get("/login", indexController.displayLoginPage);

/** GET - processes the Login Page */
router.post("/login", indexController.processLoginPage);

/** GET - display the User Registration Page */
router.get("/register", indexController.displayRegisterPage);

/** POST - processes the User Registration Page */
router.post("/register", indexController.processRegisterPage);

/** GET - perform user logout */
router.get("/logout", indexController.performLogout);

module.exports = router;
