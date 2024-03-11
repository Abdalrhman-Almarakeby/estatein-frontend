require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");
const dbURI = process.env.DB_URI;
const port = process.env.PORT || 8080;

(async () => {
  try {
    await mongoose.connect(dbURI);
    app.listen(port);
    console.log(`The app is listing on port ${port}`);
  } catch (err) {
    console.log(err);
  }
})();
