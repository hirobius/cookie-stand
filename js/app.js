'use strict';



let myContainer = document.getElementById('Container');

// Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// ------------------

// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:





// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:





// get each store element by id.

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  // Stores the min/max hourly customers
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  // The average number of cookies purchased per customer
  avgCookiesPurchasedPerCustomer: 6.3,
  // will hold the calculated number of cookies sold each hok,ur
  cookiesSoldHourlyArray: [],
  // will hold the calculated number of cookies sold in the store all day long
  dailyTotal: 0,
  // A method to generate a random number of customers per hour.
  randomCustomersPerHour: function () {
    console.log('I\'m in randomCustomersPerHour');
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  // A method to calculate and populate our number of cookies sold per hour
  calcCookiesSoldHourly: function () {
    let randomCookiesSoldHourly = this.randomCustomersPerHour();
    console.log(randomCookiesSoldHourly);
    console.log(this.cookiesSoldHourlyArray);
    console.log('I\'m in calcCookiesSoldHourly');
    // do something, maybe use a for loop counter
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldHourlyArray.push(randomCookiesSoldHourly * this.avgCookiesPurchasedPerCustomer);
    }
  },

  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

  // a method to render the list items.
  render: function () {
    // do something
    this.calcCookiesSoldHourly();
    console.log('I\'m inside render method');
  },
};
seattle.render();

// function that puts the indexes of both arrays together
function cookieCounter() {
  for (var i = 0; i < hours.length; i++) {
    let cookieCount = (`${hours.push} : ${seattle.cookiesSoldHourlyArray.push}`);
    console.log(hours, seattle.cookiesSoldHourlyArray);
    console.log(cookieCount);
    return;
  }
}
cookieCounter();
