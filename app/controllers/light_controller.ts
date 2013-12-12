///<reference path='app.d.ts'/>

// TypeScript
var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.status = function() {
  this.title = 'Ekfors@Home';
  this.header = "Belysning";
  this.lights = [{"name":"Entré", "id":"entre"},{"name":"Framsida", "id":"framsida"},{"name":"Baksida", "id":"baksida"}]
  this.render();
}

PagesController.timechannels = function() {
  this.title = 'Ekfors@Home';
  this.header = "Tidkanaler";
  this.lights = [{"name":"Entré", "id":"entre"},{"name":"Framsida", "id":"framsida"},{"name":"Baksida", "id":"baksida"}]
  this.render();
}

PagesController.settings = function() {
  this.title = 'Ekfors@Home';
  this.header = "Tidkanaler";
  this.lights = [{"name":"Entré", "id":"entre"},{"name":"Baksida", "id":"baksida"}]
  this.render();
}

module.exports = PagesController;