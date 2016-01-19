var i = prompt('how many victims will you be helping today?');

var victimArray = []
var volunteerArray = []


var peopleCreator = function() {
	var output = {};
	output.name = prompt('please enter your name');
	output.number = prompt('please enter your number');
	output.address = prompt('please enter your address');
	return output;
}

for (var counter = 0; counter < i; counter++) {
	victimArray.push(peopleCreator());
}

var a = prompt('how many volunteers can you coral?')

for (var counter = 0; counter < a; counter++){
	volunteerArray.push(peopleCreator());
}


//this just shows what my arrays contain

for (var counter=0; counter < victimArray.length; counter++){
	console.log(victimArray[counter])
}


alert('the following people are available to help you:' + volunteerArray.length + ' people and you need to help' + victimArray.length + ' people')







// var nameArray = []
// var numberArray = []
// var addressArray = []


// for (var x = 0; x < i; x++){
// 	var nameString = prompt('please enter your name');
// 	var numberString = prompt('please enter your phonenumber');
// 	var addressString = prompt('please enter your address');
// 	nameArray.push(nameString)
// 	numberArray.push(numberString)
// 	addressArray.push(addressString)
// }

