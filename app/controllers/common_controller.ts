///<reference path='../app.d.ts'/>
var locomotive = require('locomotive'), Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function () {
    this.title = 'Ekfors@Home';
    this.header = "Ekfors@Home";
    this.render();
};

module.exports = PagesController;