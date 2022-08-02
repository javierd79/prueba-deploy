const express = require('express');
const router = express.Router();
const miblog = require('../services/miblog');

/* GET posts */

router.get('/', async function (req, res, next) {
  try {
    res.json(await miblog.getMultiple(req.query.page));
  } catch (error) {
    console.error(`Error while getting post `, error.message);
    next(error);
  }
});

/* POST create new posts */

// router.post('/', async function(req, res, next) {
//   try {
//     res.json(await miblog.create(req.body));
//   } catch (error){
//     console.error(`Error while creating a post`, error.message);
//     next(error);
//   }
// });

module.exports = router;