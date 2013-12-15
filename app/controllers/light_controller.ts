///<reference path='../app.d.ts'/>
/// <reference path="../model/model.ts"/>

var model = new Model(); 

// TypeScript
var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.status = function() {
  this.title = 'Ekfors@Home';
  this.header = "Belysning";
  this.lights = model.Lights;
  this.render();
}

PagesController.timechannels = function() {
  this.title = 'Ekfors@Home';
  this.header = "Tidkanaler";
  this.lights = model.Lights;
  this.render();
}

PagesController.settings = function() {
  this.title = 'Ekfors@Home';
  this.header = "Tidkanaler";
  this.lights = model.Lights;
  this.render();
}

module.exports = PagesController;