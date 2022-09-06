// Requiring Vocabulary model
var db = require("../models");

module.exports = function (app) {
  //   all words in the dictionary
  app.get("/all", function (req, res) {

    db.Dictionary.findAll({}).then(function (result) {
      res.json(result);
    })
  })

  // to get a specific word
  app.get("/:word", function(req, res){

    db.Dictionary.findAll({
          where: {
            word: req.params.word
          }
        }).then(function (result) {
          res.json(result);
        });
  })

    // To get all words with a particular starting letter
    app.get("/all/:letter", function(req, res){
      var Op = db.Sequelize.Op;
      // console.log(Op);
      db.Dictionary.findAll({
            where: {
              word: {
                [Op.like]: req.params.letter + '%'
              }
            }
          }).then(function (result) {
            res.json(result);
          });
    })
  //   SELECT LEARNERS.WORD FROM VOCABS RIGHT JOIN LEARNERS ON VOCABS.LEARNERID = LEARNERS.ID WHERE LEARNERS.NAME = "MAHISHA";
  //To view learners' status
  // app.get("/api/learner/status/:learnersName", function (req, res) {

  //   db.Learner.findAll({
  //     where: {
  //       NAME: req.params.learnersName
  //     },
  //     include: [db.Vocabs]
  //   }).then(function (result) {
  //     console.log("Combination query");
  //     console.log(result);
  //     res.json(result);
  //   });
  // })
  // // To view learners graph
  // app.get("/api/learner/graph/:learnersName", function (req, res) {
  //   db.Learner.findAll({
  //     group: ['createdAt'],
  //     attributes: ['createdAt', db.Sequelize.fn('count', 1)],
  //     where: {
  //       NAME: req.params.learnersName
  //     }
  //   }).then(function(result){
  //   res.json(result);
  // })
  //   // db.Learner.findAll({
  //   //   where: {
  //   //     NAME: req.params.learnersName
  //   //   }
  //   // }).then(function (result) {
  //   //   res.json(result);
  //   // })
  // })


  // //   To view all learners
  // app.get("/api/learners", function (req, res) {
  //   db.Learner.findAll({}).then(function (result) {
  //     console.log(result);
  //     res.json(result);
  //   })
  // })

  // //   Server side to get a word by ID
  // app.get("/api/word/:id", function (req, res) {
  //   db.Vocabs.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //   });
  // })

  // // Server side post script to add a new word
  // app.post("/api/words", function (req, res) {

  //   db.Vocabs.create({
  //     WORD: req.body.word,
  //     MASTERED: req.body.category
  //   }).then(function (result) {
  //     res.json(result);
  //   })
  // })

  // // Server side post new learner values
  // app.post("/api/learners/:id", function (req, res) {
  //   var id = req.params.id;
  //   db.Learner.create({
  //     WORD: req.body.word,
  //     NAME: req.body.learner,
  //     STATUS: req.body.category
  //   }, {
  //     where: {
  //       id: id
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //   })
  // })

  // //   Update table
  // app.put("/api/words/:id", function (req, res) {
  //   var id = req.params.id;
  //   var catalog = req.body.catalog;

  //   db.Vocabs.update({
  //     MASTERED: catalog
  //   }, {
  //     where: {
  //       id: id
  //     }
  //   })
  // })

  // // To delete a word
  // app.delete("/api/delete/:id", function (req, res) {
  //   var id = req.params.id;

  //   db.Vocabs.destroy({
  //     where: {
  //       id: id
  //     }
  //   })
  // })

}