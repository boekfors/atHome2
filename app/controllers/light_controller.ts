///<reference path='../app.d.ts'/>

class Model
{
    Lights : Light[] = [new Light('Entré','entre',true),
		new Light('Framsida','framsida',false),
		new Light('Baksida','baksida',true),
		new Light('Fönster','fonster',true)];
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
			this.Status = false;
			this.FunctionMode = 0;
			this.TimerDelay = 0;
			this.TimeChannels = 0;
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
  //Read values from device
  this.lights = model.Lights;
  this.render();
}

PagesController.timechannels = function() {
  this.title = 'Ekfors@Home';
  this.header = "Tidkanaler";
  //Read values from device
  this.lights = model.Lights;
  this.render();
}

PagesController.settings = function() {
  this.title = 'Ekfors@Home';
  this.header = "Inställningar";
  //Read values from device
  this.lights = model.Lights;
  this.render();
}

PagesController.saveStatus = function() {

  //Get light id and function mode value
  this.redirect('/light');
}

PagesController.saveSettings = function() {

  //Get [] {id, functionMode, timerDelay} 
  
}

PagesController.saveTimeChannels = function() {

  //Get [] {id, timeChannels} 
  this.render('timeChannels');
}
module.exports = PagesController;