///<reference path='../app.d.ts'/>
var Model = (function () {
    function Model() {
        var lights = [
            new Light('Entré', 'entre', true),
            new Light('Framsida', 'framsida', false),
            new Light('Baksida', 'baksida', true)];
        this.Lights = lights;
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
    }
    return Light;
})();
