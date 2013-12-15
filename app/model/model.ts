/// <reference path="light.ts" />

// TypeScript

class Model
{
    Lights : Light[] = [new Light('Entré','entre',true),
		new Light('Framsida','framsida',false),
		new Light('Baksida','baksida',true)];
}

interface IModel
{
    Lights : Light[];
}

