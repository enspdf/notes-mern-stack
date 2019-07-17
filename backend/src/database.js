const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB is connected");
});
