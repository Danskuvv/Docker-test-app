// app.js
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3001;
const host = "0.0.0.0";

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://danielvv:koira7mongo@cluster0.lhg1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/animals", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("palvelinohjelmointi");
    const collection = database.collection("animals");

    // Check the count of documents in the collection
    const count = await collection.countDocuments();
    console.log(
      `Number of documents in the 'palvelinohjelmointi.animals' collection: ${count}`
    );

    // Perform the find operation to get all documents
    const animals = await collection.find().toArray();
    console.log("Animals found:", animals);

    // Send the data as a response
    res.json(animals);
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    res.status(500).send("Error fetching data from MongoDB");
  } finally {
    await client.close();
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://localhost}:${port}/`);
});
