const express = require('express'),
      router = express.Router(),
      Controller = require('../Controllers');

router.get('/', (req, res) => {
  try {
    Controller.ConstructorsController.getAllConstructors()
      .then(result => {
        if(result.status) res.status(404).type('txt').send('try with another id or check that your have not made a mistake (:');
        res.status(200).type('json').send(result)
      })
      .catch(reason => reason)
  } catch (e) {
    
  }
})

router.get('/:id', (req, res) => {
  try {
    let id =  req.params.id;
    Controller.ConstructorsController.getConstructorById(id)
      .then(result => {
        if(result.status) res.status(404).type('txt').send('try with another id or check that your have not made a mistake (:');
        res.status(200).type('json').send(result);
      })
      .catch(reason => reason)
  } catch (e) {
    throw e;
  }

})

module.exports = router;