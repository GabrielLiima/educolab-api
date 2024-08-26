const Forum = require("../models/Forum");
const Student = require("../models/Student");

exports.getEligible = (req, res) => {
  const id = req.params.id;

  Student.find({ ForumID: id, hasConfirmed: true })
    .then((result) => {
      if(result?.length >= 5) {
        return res.json({ eligible: true });
      }

      res.json({ eligible: false });
    })
    .catch((err) => {
      res.status(500).send("Ocorreu um erro ao consultar a eligibilidade do fórum.")
      console.log(err)
    });
};

exports.postRegisterForum = (req, res) => {
  const id = req.body.id;

  Forum.findOne({ id: id }).then((result) => {
    if (result) {
      return res.status(400).send(`O fórum já foi cadastrado anteriormente.`);
    }

    const forum = new Forum({ id: id });

    forum
      .save()
      .then(() => {
        res.send(`Fórum cadastrado com sucesso, aguardando confirmação.`);
      })
      .catch((err) => {
        res.status(500).send("Ocorreu um erro ao cadastrar o fórum.");
        console.log(err);
      });
  });
};
