const express = require('express'),
      router = express.Router(),
      Controller = require('../Controllers');

router.get('/', (req, res) => {
  try {
    console.log('pasa por aquí ')
    Controller.DriverController.getAllDrivers()
      .then(result => {
        res.status(200).type('json').send(result)
      })
      .catch(reason => reason)
  } catch (e) {
    throw e;
  }
})

router.get('/:id', (req, res) => {
  try {
    let id =  req.params.id;
    Controller.DriverController.getDriverById(id)
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