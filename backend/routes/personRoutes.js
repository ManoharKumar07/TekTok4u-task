const express = require("express");
const {
  addPerson,
  getPersons,
  deletePerson,
  updatePerson,
} = require("../controllers/personController");
const router = express.Router();

router.post("/", addPerson);
router.get("/", getPersons);
router.delete("/:id", deletePerson);
router.put("/:id", updatePerson);

module.exports = router;
