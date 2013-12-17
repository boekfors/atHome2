///<reference path='../app.d.ts'/>
var Model = (function () {
    function Model() {
        this.Lights = [
            new Light('Entré', 'entre', true),
            new Light('Framsida', 'framsida', false),
            new Light('Baksida', 'baksida', true),
            new Light('Fönster', 'fonster', true)];
    }
    return Model;
})();

var Light = (function () {
    function Light(name, id, hasTimer) {
        this.name = name;
        this.id = id;
        this.hasTimer = hasTimer;
        this.Name = name;
        this.Id = id;
        this.HasTimer = hasTimer;
        this.Status = false;
        this.FunctionMode = 0;
        this.TimerDelay = 0;
        this.TimeChannels = 0;
    }
    return Light;
})();

var model = new Model();

// TypeScript
var locomotive = require('locomotive'), Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.status = function () {
    this.title = 'Ekfors@Home';
    this.header = "Belysning";

    //Read values from device
    this.lights = model.Lights;
    this.render();
};

PagesController.timechannels = function () {
    this.title = 'Ekfors@Home';
    this.header = "Tidkanaler";

    //Read values from device
    this.lights = model.Lights;
    this.render();
};

PagesController.settings = function () {
    this.title = 'Ekfors@Home';
    this.header = "Inställningar";

    //Read values from device
    this.lights = model.Lights;
    this.render();
};

PagesController.saveStatus = function () {
    //Get light id and function mode value
    this.redirect('/light');
};

PagesController.saveSettings = function () {
    //Get [] {id, functionMode, timerDelay}
    this.title = 'Ekfors@Home';
    this.header = "Tidkanaler - sparade";

    //Read values from device
    this.lights = model.Lights;
    this.render();
};

PagesController.saveTimeChannels = function () {
    //Get [] {id, timeChannels}
    this.render('timeChannels');
};
module.exports = PagesController;
