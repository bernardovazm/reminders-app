const express = require("express");
const router = express.Router();
const remindersController = require("../controllers/remindersController");

router.post("/", remindersController.addReminder);
router.get("/", remindersController.getReminders);
router.delete("/:id", remindersController.deleteReminder);

module.exports = router;
