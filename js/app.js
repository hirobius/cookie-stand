'use strict';

// get each store element by id

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function randomCustomerPerHour() {
  // get random customers per hour
}

let seattle = {
  name: 'Seattle',
  // the minimum number of customers per hour.
  minCookiesSoldEachHour: 23,
  // the maximum number of customers per hour
  maxCookiesSoldEachHour: 65,
  // The average number of cookies purchased per customer
  avgCookiesSoldPerCustomer: 6.3,
  // will hold the calculated number of cookies sold each hour
  cookiesSoldPerHourArray: [],
  // will hold the calculated number of cookies sold in the store all day long
  dailyTotal: 0,
  //a method to calculate a random number of customers per hour
  randomCustomerPerHour: function () {
    // do something
    return Math.floor(Math.random() * (this.maxCookiesSoldEachHour - this.minCookiesSoldEachHour + 1) + this.minCookiesSoldEachHour),
    console.log('I\'m in randomCustomerPerHour');
  },
  // a method to calculate and populate our number of cookies sold per hour
  calcCookiesSoldEachHour: function () {
    this.randomCustomerPerHour();
    console.log('I\'m in calcCookiesSoldEachHour');
    // do something, maybe use a for loop counter
  },
  // a method to render the list items.
  render: function () {
    // do something
    this.calcCookiesSoldEachHour();
    console.log('I\'m inside render method');
  },
};
seattle.render();
