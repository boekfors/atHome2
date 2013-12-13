///<reference path='../app.d.ts'/>
var locomotive = require('locomotive'), Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.status = function () {
    this.title = 'Ekfors@Home';
    this.header = "Värme";
    this.render();
};

module.exports = PagesController;
