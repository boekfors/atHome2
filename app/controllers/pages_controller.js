///<reference path='app.d.ts'/>
// TypeScript
var locomotive = require('locomotive'), Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function () {
    this.title = 'Ekfors@Home';
    this.header = "Ekfors@Home";
    this.render();
};

PagesController.light = function () {
    this.title = 'Ekfors@Home';
    this.header = "Belysning";
    this.render();
};

PagesController.heat = function () {
    this.title = 'Ekfors@Home';
    this.header = "Värme";
    this.render();
};

module.exports = PagesController;
