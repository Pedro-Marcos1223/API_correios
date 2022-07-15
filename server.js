const express = require("express");
const app = express();

app.use(express.json());

require("./src")(app);

app.listen(3000, () => {
  console.log("App rodando na porta 3000!")
});