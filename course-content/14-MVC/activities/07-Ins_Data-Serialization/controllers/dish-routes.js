const router = require('express').Router();
const Dish = require('../models/Dish');

// get one dish without serializing data
// router.get('/dish/:id', async (req, res) => {
//   try {
//     const dishData = await Dish.findByPk(req.params.id);
//     console.log(dishData)//this is an obj
//     const disgObj = dishData.dataValues//this works
//     console.log("disgObj",disgObj)
//     res.render('dish', disgObj);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get one dish with serialized data
router.get('/dish/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  // you get a javascript object representing a model instance.
  const dishData = await Dish.findByPk(req.params.id);
  // res.json(dishData);;
  // http://mcranston18.github.io/how-does-sequelize-serialize-objects/
  console.log(dishData)
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  //So the Controller must serialize the data in the route to get rid of all of that extra information, before passing it to the templates in the View.
  //undecorated data values,
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  const dish = dishData.get({ plain: true });
  // https://sequelize.org/master/manual/model-instances.html
  // The get syntax binds an object property to a function that will be called when that property is looked up. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
  // { plain: true } => If key is given and a field or virtual getter is present for the key it will call that getter - else it will return the value for key.
  // https://sequelize.org/v3/docs/instances/#values-of-an-instance
  //If set to true, included instances will be returned as plain objects https://sequelize.org/master/class/lib/model.js~Model.html (https://sequelize.org/master/class/lib/model.js~Model.html)
  console.log(dish);
  // const dish = dishData.toJSON(); //- works aswell => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('dish', dish);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

