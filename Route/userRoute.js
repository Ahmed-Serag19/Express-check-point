exports.homePage = (req, res) => {
  res.render('home.pug');
};

exports.ourServices = (req, res) => {
  res.render('our-services.pug');
};

exports.contactUs = (req, res) => {
  res.render('contact-us.pug');
};
