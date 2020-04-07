var express = require("express");
var app= express();
var bodyparser = require("body-parser");
var request = require("request");

app.set("view engine","ejs"); 
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

var campgrounds =[
		{name:"salmon", image:"https://images-na.ssl-images-amazon.com/images/I/61qR2BwdEAL._SX425_.jpg"},
		{name:"veirjeoi", image:"https://images-na.ssl-images-amazon.com/images/I/61qR2BwdEAL._SX425_.jpg"},
		{name:"erverv", image:"https://images-na.ssl-images-amazon.com/images/I/61qR2BwdEAL._SX425_.jpg"}
	]

app.get("/",function(req,res){
	res.render("landing");
})

app.get("/campgrounds",function(req,res){
	res.render("campgrounds",{campgrounds,campgrounds});
});

app.post("/campgrounds",function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var newcamp={name: name, image:image}
	campgrounds.push(newcamp);
	res.redirect("/campgrounds");
	});

app.get("/campgrounds/new", function (req,res){
	res.render("new");
})

app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});