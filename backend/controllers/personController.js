const Person = require("../models/personModel");

// Create a new person
const addPerson = async (req, res) => {
  try {
    const { name, email, phone, profileImage } = req.body;
    const newPerson = new Person({ name, email, phone, profileImage });
    await newPerson.save();
    res.json({ message: "Person added successfully!", person: newPerson });
  } catch (error) {
    res.status(500).json({ error: "Error adding person" });
  }
};

// Get all persons
const getPersons = async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
};

// Delete a person
const deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: "Person deleted" });
};

module.exports = { addPerson, getPersons, deletePerson };
