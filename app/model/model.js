/// <reference path="light.ts" />
// TypeScript
var Model = (function () {
    function Model() {
        this.Lights = [
            new Light('Entré', 'entre', true),
            new Light('Framsida', 'framsida', false),
            new Light('Baksida', 'baksida', true)];
    }
    return Model;
})();
