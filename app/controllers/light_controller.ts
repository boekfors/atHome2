///<reference path='../app.d.ts'/>

class Model
{
    Lights : Light[] = [new Light('Entré','entre',true),
		new Light('Framsida','framsida',false),
		new Light('Baksida','baksida',true)];
}

class Light
{
	Name: string;
	Id: string;
	HasTimer: boolean;
	Status: boolean;
	FunctionMode: number;
	TimerDelay: number;
	TimeChannels: number;

		constructor(public name, public id, public hasTimer)
		{
			this.Name = name;
			this.Id = id;
			this.HasTimer = hasTimer;
			this.Status = true;
			this.FunctionMode = 1;
			this.TimerDelay = 5;
			this.TimeChannels = 1;
		}
}

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
  var firstLight = model.Lights[0];
  firstLight.Status = false;
  firstLight.TimeChannels = 13;

  model.Lights[0] = firstLight;
  model.Lights[1].Status = false;
  this.lights = model.Lights;
  this.render();
}

PagesController.settings = function() {
  this.title = 'Ekfors@Home';
  this.header = "Inställningar";
  this.lights = model.Lights;
  this.render();
}

module.exports = PagesController;