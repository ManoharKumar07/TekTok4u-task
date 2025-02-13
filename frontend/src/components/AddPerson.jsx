import React, { useState } from "react";
import axios from "axios";

function AddPerson() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!imageFile) return alert("Please select an image!");
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "TekToktask");
    data.append("cloud_name", "dbvefyvdo");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dbvefyvdo/image/upload",
      data
    );
    console.log(res.data);
    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageUrl = await handleImageUpload();
    if (!imageUrl) return;

    const newPerson = { ...formData, profileImage: imageUrl };
    await axios.post("http://localhost:5000/api/persons", newPerson);
    alert("Person added!");
  };

  return (
    <div className="container">
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit" className="submit-btn">
          Add Person
        </button>
      </form>
    </div>
  );
}

export default AddPerson;
