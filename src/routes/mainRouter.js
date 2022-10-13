const express = require("express");
const { getQuestions, saveQuestion, getCodes, saveCode } = require("../controllers/mainController");
const app = express();

app.get("/getquestion",getQuestions)

app.post("/savequestion",saveQuestion)

app.get("/getcode",getCodes)

app.post("/savecode",saveCode)

module.exports = app;
