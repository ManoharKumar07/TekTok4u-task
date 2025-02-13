import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPerson from "./components/AddPerson";
import ViewPersons from "./components/ViewPerson";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddPerson />} />
        <Route path="/view" element={<ViewPersons />} />
      </Routes>
    </Router>
  );
}

export default App;
