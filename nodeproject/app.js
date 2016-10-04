var express = require("express");
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', 
        { 
            list: ['first value', 'second value', '3rd value'],
            nav: ['services', 'portfolio', 'about', 'team', 'contact']
            
        }
    );
    
});



app.listen(port, function(err) {
    console.log("server is running on port " + port);
});