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
