require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const personRoutes = require("./routes/personRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/persons", personRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
