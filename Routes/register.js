const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
  res.send('regiter endpoint')
})

module.exports = router;