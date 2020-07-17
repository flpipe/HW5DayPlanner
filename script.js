
//using moment.js and getting basic time blocks set up
var currentDate = moment().format('dddd')+ " " + moment().format("Do MMM YYYY");
console.log(currentDate);

var currentHour = moment().format('h:mm:ss a');
console.log(currentHour);
