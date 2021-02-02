'use strict';

// create an element, give it content, append it to the DOM, rinse, repeat
let cookieTable = document.getElementById('cookie-table');
let allStores = [];
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

// A method to generate a random number of customers per hour.
Store.prototype.randomCustMath = function () {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random (Also in ReadMe)
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

// A method to calculate and populate our number of cookies sold per hour
Store.prototype.calcHourlyCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCust = this.randomCustMath();
    let hourlyTotal = Math.ceil(randomCust * this.avg);
    this.hourlyCookies.push(hourlyTotal);
    // Next Line ???
    this.dailyTotal += hourlyTotal;
  }
};

Store.prototype.render = function () {
  // this following line is responsible for continuing the tether / math from above
  this.calcHourlyCookies();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = this.name;
  cookieTable.appendChild(tr);
  tr.appendChild(th);

  for (let i = 0; i < this.hourlyCookies.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlyCookies[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
