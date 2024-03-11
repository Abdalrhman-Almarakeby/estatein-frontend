const express = require("express");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");

const app = express();

// Security
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(expressMongoSanitize());
app.use(cors());

// Compression
app.use(compression());

// Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Error handling
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Server error");
});

module.exports = app;
