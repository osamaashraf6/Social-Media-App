// All required import
const router = require("express").Router();
const { getUser } = require("../controllers/user");

// HTTP method and Endpoint and Permissions
router.get("/testuser", getUser);

module.exports = router;
