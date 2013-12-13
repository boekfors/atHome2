///<reference path='../app.d.ts'/>



class Model
{
	Lights : Light[];

	constructor()
	{
		var lights = [new Light('Entré','entre',true),
		new Light('Framsida','framsida',false),
		new Light('Baksida','baksida',true)];
		this.Lights = lights;
	}
}

class Light
{
	Name: string;
	Id: string;
	HasTimer: boolean;
	Status: boolean;
	FunctionMode: number;
	TimerDelay: number;
	WeekdayTimeChannels: number;
	WeekendTimechannels: number;

		constructor(public name, public id, public hasTimer)
		{
			this.Name = name;
			this.Id = id;
			this.HasTimer = hasTimer;
		}
}


