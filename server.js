var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var middleware = require('./controllers/middleware.js');

var mainCtrl = require('./controllers/mainCtrl.js');

//var skillz = require('/skillz.js');

app.listen(3000, function () {
  console.log('listening on port 3000')
});

app.use(bodyParser.json());

app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupations.slice());
app.get('/hobbies', mainCtrl.getHobbies);
//app.get('/hobbies/:type', mainCtrl.getHobbies); filter type
app.get('/family', mainCtrl.getFamily);
//app.get('/family', mainCtrl.getFamily); filter gender
app.get('/restaurants', mainCtrl.getRestaurants);
//app.get('restaurants', mainCtrl.getRestaurants); by rating
//app.get('restaurants', mainCtrl.getRestaurants); query by restaurant name
