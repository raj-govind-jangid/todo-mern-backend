const Code = require("../models/code");
const Question = require("../models/question");

exports.getQuestions = async (req,res) => {
    let data = await Question.find().lean();
    res.status(200).json({"status":true,data})
}

exports.saveQuestion = async (req,res) => {
    let question = {
        title: req.body.data.title,
        description: req.body.data.description,
    }
    let newQuestion = new Question(question);
    await newQuestion.save().then((data)=>{
        res.status(201).json({"status":true,"message":"Success"})
    })
    .catch((err)=>{
        res.status(400).json({"status":false,"message":err.message})
    })
}

exports.getCodes = async (req,res) => {
    let data = await Code.find().lean();
    res.status(200).json({"status":true,data})
}

exports.saveCode = async (req,res) => {
    let code = {
        title: req.body.data.title,
        description: req.body.data.description,
        comment: req.body.data.comment,
    }
    let newCode = new Code(code);
    await newCode.save().then((data)=>{
        res.status(201).json({"status":true,"message":"Success"})
    })
    .catch((err)=>{
        res.status(400).json({"status":false,"message":err.message})
    })
}
