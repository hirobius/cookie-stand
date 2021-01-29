'use strict';


// Within your javascript file create separate JS object literals for each shop location that outputs to the sales.html file
// Store the results for each location in a separate array… perhaps as a property of the object representing that location

let seattleList = document.getElementById('seattle');

// get each store element by id.
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (Also in ReadMe)
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  },
  // A method to calculate and populate our number of cookies sold per hour
  calcCookiesSoldHourly: function () {
    // do something, maybe use a for loop counter
    for (let i = 0; i < hours.length; i++) {
      let randomCustMath = this.randomCustomersPerHour();
      let hourlyTotal = Math.ceil(randomCustMath * this.avgCookiesPurchasedPerCustomer);
      this.cookiesSoldHourlyArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function () {
    this.calcCookiesSoldHourly();
    for (let i = 0; i < hours.length; i++) {
      // append it to the DOM
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(li);
  }
};
seattle.render();
