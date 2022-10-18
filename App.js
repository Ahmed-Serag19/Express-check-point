const express = require('express');

const app = express();

const route = require('./Route/userRoute');
const daysOff = require('./middleware/checkWorkingDay');

app.set('Views', './Views');

app.get('/', daysOff.ifWorkingDay, route.homePage);

app.get('/services', daysOff.ifWorkingDay, route.ourServices);

app.get('/contact', daysOff.ifWorkingDay, route.contactUs);

module.exports = app;
