exports.ifWorkingDay = (req, res, next) => {
  switch (new Date().getDay()) {
    case 0:
      day = 'Sunday';
      res.render('days-off.pug');
      break;
    case 1:
      day = 'Monday';
      next();
      break;
    case 2:
      day = 'Tuesday';
      next();
      break;
    case 3:
      day = 'Wednesday';
      next();
      break;
    case 4:
      day = 'Thursday';
      next();
      break;
    case 5:
      day = 'Friday';
      next();
      break;
    case 6:
      day = 'Saturday';
      res.render('days-off.pug');
      break;
  }
};
