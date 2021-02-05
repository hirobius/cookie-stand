'use strict';

let header = document.getElementById('cookie-header');
let footer = document.getElementById('cookie-footer');
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
    this.dailyTotal += hourlyTotal;
  }
};

// A method to render the body rows of the table
Store.prototype.render = function () {
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

function renderHeader() {
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    header.appendChild(th);
  }
  let th = document.createElement('th');
  th.textContent = 'Daily Total';
  header.appendChild(th);
}

// Help from TA Bryant for Lab 7 stretch goal
function getGrandTotal() {
  const grandTotal = new Array(hours.length + 1);
  grandTotal.fill(0);
  for (let i = 0; i < allStores.length; i++) {
    for (let j = 0; j < allStores[i].hourlyCookies.length; j++) {
      grandTotal[j] += allStores[i].hourlyCookies[j];
      grandTotal[grandTotal.length - 1] += allStores[i].hourlyCookies[j];
    }
  }
  return grandTotal;
}

function renderFooter() {
  let grandTotal = getGrandTotal();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (let i = 0; i < grandTotal.length; i++) {
    let td = document.createElement('td');
    td.textContent = grandTotal[i];
    tr.appendChild(td);
  }
  footer.appendChild(tr);
}

// let nums = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < hours.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < nums[i].length; j++) {
//     sum += nums[i][j];
//   }
//   this.hourlyTotal.push(sum);
// }

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooter();
