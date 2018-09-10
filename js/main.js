import {Car} from './car';
import {Truck} from './truck';
import {Bike} from "./bike";

let car = new Car({
	price: 30000, make: 'Chevy', model: 'Malibu',
	year: 2014, isElectric: false, isHatchback: false
});

let truck = new Truck({
	price: 40000, make: 'Ford', model: 'F150',
	year: 2014, is4by4: true
});

let bike = new Bike({
	price: 10000 , make: 'Ducati' , model: '1200R',
	year: 2015, isElectric: true , has2wheels: true
});

var output = document.getElementById('output');
output.innerHTML += `
	<br/>${car.getDetails() }
    <br/>Car total: ${car.getTotal(.08) }
	<br/><br />
	${truck.getDetails() }
	<br/>Truck total: ${truck.getTotal(.08) }
	<br/><br />
	<br/>${bike.getDetails()}
	<br/>Bike total: ${bike.getTotal(.08)}
	`;
