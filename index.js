(function () {
	"use strict";
	
	var express = require("express"),
			http = require("http"),
			app = express();

	app.use(express.static(__dirname));
	http.createServer(app).listen(5000);
}());