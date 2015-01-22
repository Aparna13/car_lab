function Car(make, model, year,color){
	this.make = make;
	this.model =model;
	this.year = year;
	this.state = "off";
	this.color = color;
	this.previous_owners = [];
	this.current_owner = "Manufacturer";
	this.passengers = [];

};


Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;

};
// if (this.neighborhood.indexOf(this) === -1) {
// 		this.neighborhood.push(this);

// 	};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function (carstart) {
	this.state = "on";
};

Car.prototype.off = function (caroff) {
	this.state = "off";
};

Car.prototype.driveTo = function (driveto) {
	if (this.state === "on") {
		console.log("driving to " + driveto);
		this.passengers.push(driveto);
	}

};

Car.prototype.park = function (parkto) {
	if (this.state === "off") {
		console.log("parked!");
	}

};

Car.prototype.passengers = [];

Car.prototype.pick_up = function (name) {
	if (this.state === "on") {
	console.log ( "driving to pick up " + name );
	this.passengers.push(name);
	}
};


Car.prototype.dropOff = function(name) {
	if (this.state === "on") {
		x = this.passengers.indexOf(name);
		this.passengers.splice(x);
	}
};





module.exports=Car;