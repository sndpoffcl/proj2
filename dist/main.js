'use strict';

System.register(['./car', './truck', './bike'], function (_export, _context) {
	"use strict";

	var Car, Truck, Bike, car, truck, bike, output;
	return {
		setters: [function (_car) {
			Car = _car.Car;
		}, function (_truck) {
			Truck = _truck.Truck;
		}, function (_bike) {
			Bike = _bike.Bike;
		}],
		execute: function () {
			car = new Car({
				price: 30000, make: 'Chevy', model: 'Malibu',
				year: 2014, isElectric: false, isHatchback: false
			});
			truck = new Truck({
				price: 40000, make: 'Ford', model: 'F150',
				year: 2014, is4by4: true
			});
			bike = new Bike({
				price: 10000, make: 'Ducati', model: '1200R',
				year: 2015, isElectric: true, has2wheels: true
			});
			output = document.getElementById('output');

			output.innerHTML += '\n\t<br/>' + car.getDetails() + '\n    <br/>Car total: ' + car.getTotal(.08) + '\n\t<br/><br />\n\t' + truck.getDetails() + '\n\t<br/>Truck total: ' + truck.getTotal(.08) + '\n\t<br/><br />\n\t<br/>' + bike.getDetails() + '\n\t<br/>Bike total: ' + bike.getTotal(.08) + '\n\t';
		}
	};
});
//# sourceMappingURL=main.js.map
