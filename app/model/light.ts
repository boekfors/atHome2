///<reference path='../app.d.ts'/>

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


