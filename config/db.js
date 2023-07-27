const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://admin:admin@cluster0.dme40pl.mongodb.net/?retryWrites=true&w=majority";

const connectWithDb = () => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb
