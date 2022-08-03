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

router.post('/', async function(req, res, next) {
  try {
    res.json(await miblog.create(req.body));
  } catch(err) {
    console.error(`Error while creating post`, err.message);
    next(err);
  }
});

/* PUT edit post by id */

router.put('/:id', async function(req, res, next){
  try {
    res.json(await miblog.update(req.params.id, req.body));
    console.log(`id = ${req.params.id} body = ${req.body.description}`);
  } catch (err) {
    console.error(`Error while updating posts`, err.message);
    next(err);
  }
}); 

/* DELETE post by id */

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await miblog.remove(req.params.id));
  } catch(err){
    console.error(`Error while deleting post`, err.message);
    next(err);
  }
})

module.exports = router;