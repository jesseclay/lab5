// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
    'friends': data["friends"]
  });
};

exports.addFriend = function(req, res) { 
  res.json({name: req.query.name,
            description: req.query.description,
            imageURL: "http://thecatapi.com/api/images/get?format=src&type=gif"
          });
 };