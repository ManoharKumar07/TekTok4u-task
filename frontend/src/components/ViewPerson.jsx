import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewPersons() {
  const [persons, setPersons] = useState([]);
  const [editPerson, setEditPerson] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    const res = await axios.get("http://localhost:5000/api/persons");
    setPersons(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/persons/${id}`);
    fetchPersons();
  };

  const handleEditClick = (person) => {
    setEditPerson(person._id);
    setUpdatedData({
      name: person.name,
      email: person.email,
      phone: person.phone,
    });
  };

  const handleUpdate = async () => {
    await axios.put(
      `http://localhost:5000/api/persons/${editPerson}`,
      updatedData
    );
    setEditPerson(null);
    fetchPersons();
  };

  return (
    <div className="view-container">
      <h2>All Persons</h2>
      <table className="view-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.phone}</td>
              <td>
                <img
                  src={p.profileImage}
                  alt="Profile"
                  className="profile-img"
                />
              </td>
              <td>
                <button className="edit-btn" onClick={() => handleEditClick(p)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editPerson && (
        <div className="edit-container">
          <h3>Edit Person</h3>
          <input
            type="text"
            value={updatedData.name}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, name: e.target.value })
            }
          />
          <input
            type="email"
            value={updatedData.email}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, email: e.target.value })
            }
          />
          <input
            type="text"
            value={updatedData.phone}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, phone: e.target.value })
            }
          />
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewPersons;
