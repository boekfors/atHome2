///<reference path='app.d.ts'/>

// TypeScript
var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
  this.title = 'Ekfors@Home'
  this.text = "Text som ska visas på sidan"
  this.render();
}

PagesController.light = function() {
  this.title = 'Ekfors@Home'
  this.text = "Belysning"
  this.render();
}

PagesController.heat = function() {
  this.title = 'Ekfors@Home'
  this.text = "Värme"
  this.render();
}

module.exports = PagesController;