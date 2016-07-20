//1.)Flight Object Literal
//Define a flight using a literal Object that stores three values
var flightObject = {t = {
  flightNum: 'AC456',
  capacity: 150,
  reserved: 125
}

//2.) Flight Constructor
//Define a flight constructor that stores three properties
function flightConstructor(flightNum, capacity, reserved) {
  this.flightNum = flightNum;
  this.capacity = capacity;
  this.reserved = reserved;
} 

var newFlight = new flightConstructor("AC457", 155, 23);

//3.) Flight Constructor continued
	//Add a method to the flight constructor above called bookSeats()
		// Check number of seats booked does not exceed the capacity of the flight
		//  if numSeats < capacity ? reserve += 1 : alert('Exceeded capacity')
flightConstructor.prototype.bookSeats = function(num) {
	return num < this.capacity ? this.reserved += 1 : alert('Exceeded Capacity')
}

test = new flightConstructor('AC456', 135, 100)
test.bookSeats(100)
test.bookSeats(10)

