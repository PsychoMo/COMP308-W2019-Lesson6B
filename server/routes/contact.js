let express = require("express");
let router = express.Router();

let passport = require("passport");

let contactController = require("../controllers/contact");

function requireAuth(req, res, next) {
  console.log(req.user);
  // check if the user is
  if (!req.isAuthenticated() || req.user.username != "admin") {
    return res.redirect("/login");
  }
  next();
}

/** Get contact list page - read operation */
router.get("/", requireAuth, contactController.displayContactList);

/** GET Route for the Add page
 * this will display the Add page
 */

router.get("/add", requireAuth, contactController.displayAddPage);

/**POST Route for processing the Add */
router.post("/add", requireAuth, contactController.processAddPage);

/** GET Request - display the Edit page */
router.get("/edit/:id", requireAuth, contactController.displayEditPage);

router.post("/edit/:id", requireAuth, contactController.processEditPage);

/** GET request to perform the delete action */
router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;
