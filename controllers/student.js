const Student = require("../models/Student");

exports.postRegisterStudents = (req, res) => {
  const studentList = req.body.studentList;

  Student.insertMany(studentList)
    .then(() => res.send("Estudantes cadastrados com sucesso."))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Erro ao cadastrar estudantes.");
    });
};

exports.getConfirmedStudents = (req, res) => {
  const forumID = req.params.forumID;

  Student.find({ ForumID: forumID, hasConfirmed: true })
    .then((result) => {
      const studentIds = result.map((student) => student.id);
      res.json(studentIds);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Erro ao consultar estudantes.");
    });
};

exports.getStudentsRecomCode = (req, res) => {
  const forumID = req.params.forumID;

  const studentList = { 0: [], 1: [], 2: [] };

  Student.find({ ForumID: forumID }).then((result) => {
    result?.forEach((student) =>
      studentList[student.codEnvioRecom].push(student.id)
    );

    res.json(studentList);
  });
};

exports.postUpdateRecomCode = (req, res) => {
  const studentList = req.body.studentList;
  const code = req.body.code;

  Student.updateMany(
    { id: { $in: studentList } },
    { $set: { codEnvioRecom: code } }
  )
    .then(() => {
      res.send("Campos atualizados com sucesso.");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Erro ao atualizar.");
    });
};
