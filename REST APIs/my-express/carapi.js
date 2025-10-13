//Creating a new local Server
const express = require("express");
const app = express();

//Adding Middleware: JSON Data
app.use(express.json());   // important for parsing JSON

// GET Route: Fetch all cars
app.get("/api/users", (req, res) => {
    const cars = [
        { carid: 101, carname: "Honda Civic", carcolor: "Red", carprice: 1200000 },
        { carid: 102, carname: "Toyota Fortuner", carcolor: "Black", carprice: 3500000 },
        { carid: 103, carname: "Hyundai i20", carcolor: "White", carprice: 900000 }
    ];
    res.json(cars);   // use res.json for proper JSON response
});

// POST Route: Add new car
app.post("/api/users", (req, res) => {
    const newCar = req.body;  // Correct way to access JSON body
    res.json({
        message: "Car data has been added successfully!",
        car: newCar
    });
});

// Server Listening
app.listen(3000, () => {
    console.log("Server is running successfully at http://localhost:3000/api/users");
});
