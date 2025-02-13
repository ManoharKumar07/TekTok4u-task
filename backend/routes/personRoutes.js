const express = require("express");
const {
  addPerson,
  getPersons,
  deletePerson,
} = require("../controllers/personController");
const router = express.Router();

router.post("/", addPerson);
router.get("/", getPersons);
router.delete("/:id", deletePerson);

module.exports = router;
