const models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' }); 
}; // landing page

exports.submit_lead = function(req, res, next) {
 return models.Lead.create({
    email: req.body.lead_email
 }).then(lead =>{
  res.redirect('/leads');
 });
}; // submit lead return input value

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })
   
}; // landing page