const mongoose = require("mongoose");
const DB =
  "mongodb+srv://numananees:someonehackedit@cluster0.frwu6.mongodb.net/Fb?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection Successful`);
  })
  .catch((e) => {
    console.log(`Connection failed`);
  });
