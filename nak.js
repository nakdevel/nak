var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});


// 404
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

// 500
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});


// Start the Server
app.listen(app.get('port'), function() {
    console.log('Nak running on http://localhost:' + app.get('port'));
});
