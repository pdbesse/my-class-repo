const router = require('express').Router();
const Dish = require('../models/Dish');

// route to get all dishes
router.get('/', async (req, res) => {
    // We find all dishes in the db and set the data equal to dishData
    const dishData = await Dish.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 

    const dishes = dishData.map((dish) => dish.get({ plain: true }));
     //The get syntax binds an object property to a function that will be called when that property is looked up. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
    //{ plain: true } => If key is given and a field or virtual getter is present for the key it will call that getter - else it will return the value for key.
    //If set to true, included instances will be returned as plain objects https://sequelize.org/master/class/lib/model.js~Model.html (https://sequelize.org/master/class/lib/model.js~Model.html)

    // const dishes = dishData.map((dish) => dish.dataValues);
    // const dishes = dishData.map((dish) => dish.toJSON());

    // const newArr = [];
    // for(let i = 0; i < dishData.length; i++){
    //   newArr.push(dishData[i].get({ plain: true }))
    // }

    console.log(dishes);
    // We render the template, 'all', passing in dishes, a new array of serialized objects.
    res.render('all', { dishes: dishes });
    });

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{ 
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
