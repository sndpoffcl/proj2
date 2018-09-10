import {Auto} from "./auto";

export class Bike extends Auto {
    constructor(data){
        super(data);
        this.isElectric = data.isElectric;
        this.has2wheels = data.has2wheels;
    }

    getDetails() {
        return `${super.getDetails()} Electric: ${this.isElectric} Wheels: ${this.has2wheels}`;
    }

}