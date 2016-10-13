var skillz = require('../skillz.js')
var secrets = require('../secrets.js')
var exports = module.exports = {}

exports.addHeaders = function(req, res, next) {
  res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  }

exports.generateId = function (req, res, next) {
    req.body.id = skillz.skill[skillz.skill.length];
    next();
}

exports.verifyUser = function (req, res, next) {
  const user = 'admin';
  const pin = 1234
  console.log(req.params.username, req.params.pin);
  if(user === req.params.username && pin === req.params.pin){
    next()
  }else {
    console.log('access denied, error 403: FORBIDDEN');
    res.status(403).end()
  }
}

// exports.anotherFunction = function(req, res) {
//   /*...*/
// }

// the above can also be done in the following way:
//module.exports = {  //instead of var exports = module.exports = {}
//  myFunction: function(req, res) {
//    /*...*/
//  },
//  anotherFunction: function(req, res) {
//    /*...*/
//   }
//}
