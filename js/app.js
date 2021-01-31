'use strict';

// Within your javascript file create separate JS object literals for each shop location that outputs to the sales.html file
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');

let cookieTable = document.getElementById('cookie-table');


// get each store element by id.
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
}

// A method to generate a random number of customers per hour.
Store.prototype.randomCustomersPerHour = function () {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (Also in ReadMe)
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

// A method to calculate and populate our number of cookies sold per hour
Store.prototype.calcCookiesSoldHourly = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustMath = this.randomCustomersPerHour();
    let hourlyTotal = Math.ceil(randomCustMath * this.avg);
    this.hourlyCookies.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHourly();
  let th = document.createElement('th');
  th.textContent = this.name;
  for (let i = 0; i < hours.length; i++) {
    // append it to the DOM
    let tr = document.createElement('tr');
    cookieTable.appendChild(tr);




    // end of night... about 2:12:42 from lecture, rewind a few min...
    // https://frontrowviews.com/Home/Event/Play/5fea2e88e984682d9cb8f233#
    tr.appendChild(th);



    let td = document.createElement('td');
    td.textContent = `${hours[i]}: ${this.hourlyCookies[i]} hourly cookies`;
    let h3 = document.createElement('h3');
    h3.textContent = this.name;
    seattleList.appendChild(td);
  }

  // this is creating the list item bullet point:
  let td = document.createElement('td');
  td.textContent = `Total: ${this.dailyTotal} cookies`;
  cookieTable.appendChild(td);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
// let tokyo = new Store('Tokyo', 3, 24, 1.2);
// let dubai = new Store('Dubai', 11, 38, 3.7);
// let paris = new Store('Paris', 20, 38, 2.3);
// let lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


// lab 07 tips:
// header (times) and totals row only need to occur once




