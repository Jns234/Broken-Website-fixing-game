const express = require('express');
const router = express.Router();
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;