//Notes about the labels of different things

//city = the name of the city that cookie stand location is in
//min = the minimum number of customers each hour for that location
//max = the maximum number of customers each hour for that location
//avgCookies = the average number of cookies each customer buys
//custEachHour = the randomly generated number of customers who visited the stand during that hour
//cookiesEachHour = avgCookies * custEachHour


//Inside of tables:
//Table Row = tr
//Table Header/Footer = th
//salmon colored Table Data = td



//Get the 'SalesData' container and add this new footerTotals function to the bottom of it
const containerElem = document.getElementById('SalesData');

//Creating a variable for the list of total sales worldwide and then place it in a table row
const worldwideSalesPerHourElem = document.createElement('tr');



//================================================
//   EACH HOURLY TIME SLOT
// ===============================================
//
//Create time slots
const timeSlot = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
//const is used instead of let because the timeSlot column is only ever mean to equal this array


// Add a function to render the top header line of the table
// The following line gives the browser the instructions of what should be done once we call on the function further below (at the bottom of the code)
function headerTimeSlot(){

    //Get the 'SalesData'container and add this new headerTimeSlot function to the top of it
    const containerElem = document.getElementById('SalesData');

    //Creating a variable for the list of hours and placing it in the table row
    const hoursRowElem = document.createElement('tr');

    //Creating a variable to hold the header string "Location" inside of
    const locationElem = document.createElement('th');
    //Writing the string "Location" inside of the table cell
    locationElem.textContent = "Locations";
    //Appending that string to the hours row, here at the start of the row
    hoursRowElem.appendChild(locationElem);

    //Generating a column for each hourly time slot
    for (let i = 0; i < timeSlot.length; i++){
    const eachHourElem = document.createElement('th');

    //Writing each hour string at the top of its column
    eachHourElem.textContent = timeSlot[i];
    hoursRowElem.appendChild(eachHourElem);
    }

    // Creating a variable to hold the header string "Location Totals" inside of
    const locationTotalsHeaderElem = document.createElement('th');
    // Writing the actual string "Location Totals" itself
    locationTotalsHeaderElem.textContent = "Location Totals";
    // Appending that string to the hours row here, at the end of the row
    hoursRowElem.appendChild(locationTotalsHeaderElem);

    //Append the article you just created (an article with 1 table row tr containing 3 table headers th's inside) into the container element you created on the page
    containerElem.appendChild(hoursRowElem);
}



//=================================================
//        EACH COOKIE STAND
// ================================================
//Every cookie stand object has a 
//city: 'string',
//min: number,
//max: number,
//avgCookies: number,
//sales: [array],

// We created Lab 6 using object literals
// However, since every cookie stand object NEEDS to have those same key/value pairs, we should have used constructor functions instead
// Start the name of a constructor function with a capital letter and pass arguments into it
// Example: 
// function = Kitten(name, interests, isGoodWithDogs){
//      this.name = name;
//      this.interests = interests;    
//}


function CookieStand(city, min, max, avgCookies) {
    this.city = city;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.custEachHour = [];
    this.cookiesEachHour = [];    
    this.sales = this.generateEstimate();
    this.allShopArray.push(this);
}
// Create an array to hold all of the hourly totals for each city.  You will need this later in order to add them up.
CookieStand.prototype.allShopArray = [];

// THE ABOVE ALLOWS THE CONVERSION OF

// const seattle = {
//     city: 'Seattle',
//     min: 23,
//     max: 65,
//     avgCookies: 6.3,
//     sales: [],
// }

// INTO

// const seattle = new CookieStand('Seattle', 23, 65, 6.3, []);
// Remember to use that keyword "new" because it is what allows "this." to refer to the currently created object


//But before adding that line of code I first need to add a method for the constructor function this.generateEstimate and the method needs to go in the prototype.  The method needs to be bound to a given object

CookieStand.prototype.generateEstimate = function(){

    //generate random number of customers per hour:
    for(let i=0; i<timeSlot.length; i++) {
        const numberCustomers = randomInRange(this.min, this.max);

        //generate number of cookie sales each hour:
        const randCookieNumber = Math.ceil(numberCustomers * this.avgCookies);
        //Math.ceil rounds up to the next whole number
        // console.log(randCookieNumber);

        //push the random number of customers into the custEachHour array:
        this.custEachHour.push(numberCustomers);
        
        //push the random number of cookies into the cookiesEachHour array:
        this.cookiesEachHour.push(randCookieNumber);
    }
    return this.cookiesEachHour;    
}


//We also need to add a method to render the data
//The following gives the browser the instructions of what should be done once we call on the render method further below
CookieStand.prototype.render = function(){

    //get the table labelled SalesData and put a container there
    const containerElem = document.getElementById('SalesData');

    //Each city gets it's own row in the table
    const cityRow = document.createElement('tr');

    //Inside the first column of that row, write the name of the city:
    const cityHeadingElem = document.createElement('td');
    cityHeadingElem.textContent = this.city;

    //Append that header to the row for the city
    cityRow.appendChild(cityHeadingElem);

    //Inside the other columns insert the number of sales for each hour
    for (let i = 0; i < timeSlot.length; i++){
        const salesPerStandPerHour = document.createElement('td');
        salesPerStandPerHour.textContent = this.cookiesEachHour[i];
        //and append it to the row
        cityRow.appendChild(salesPerStandPerHour);
    }


    //Create the variable called eachStoreTotal
    const eachStoreTotal = document.createElement('td')
    eachStoreTotal.classList.add('TotalsColumn');
    let tempTotal = 0;
    //Create a loop adding each cookiesEachHour total to the previous one in its array
    for (let i = 0; i < this.cookiesEachHour.length; i++){
        //Set the value to zero
 
        tempTotal += this.cookiesEachHour[i];
    //     //Writing that total in the last cell of the row
        eachStoreTotal.textContent = `${tempTotal}`;
        // console.log (tempTotal)
    //Append it to the row
        cityRow.appendChild(eachStoreTotal);
    }

    //Append that row into the container on the page
    containerElem.appendChild(cityRow);

}

//Constructed objects can still use standalone functions when needed.
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//==========================================
// TAKE INPUT FROM THE FORM AND CONVERT INTO BEING A NEW COOKIE STAND
//==========================================

const newStore = document.getElementById('openNewCookieStore');
openNewCookieStore.addEventListener('submit', 
function(event){
    event.preventDefault();
    const newCity = event.target.newStoreName.value;
    const newMin = event.target.minimum.value;
    const newMax = event.target.maximum.value;
    const newAvgCookies = event.target.averageCookies.value;

    const tempDataHolder = new CookieStand(newCity, newMin, newMax, newAvgCookies);
    CookieStand.prototype.allShopArray.push(tempDataHolder);
    tempDataHolder.render();
    worldwideSalesPerHourElem.innerHTML = '';
    footerTotals();
});



//==============================================================
//                   FOOTER ROW
//=============================================================

// // Add a function to render the bottom (footer) line of the table
function footerTotals(){
    // // The following section gives the browser the instructions of what should be done once we call on that function further below (at the bottom of the code)

    
    //Creating a variable to hold the footer string "Hourly Totals Worldwide" inside
    const footerTitleElem = document.createElement('th');
    //Writing the string "Hourly Totals Worldwide" itself inside of a table cell
    footerTitleElem.textContent = "Hourly Totals Worldwide";
    //Appending that string to the footer row, here at the start of the row
    worldwideSalesPerHourElem.appendChild(footerTitleElem);



    let totalOfTotals = 0;
    //Generating a row for the worldwide totals of each hourly sale
    for (let i = 0; i < timeSlot.length; i++){
        let hourTotal = 0;
        const worldwideHourlyTotalElem = document.createElement('th');
        //Appending that content to the footer row
        worldwideSalesPerHourElem.appendChild(worldwideHourlyTotalElem);
    //Writing each worldwide hourly total inside the cells of that footer row

        for (let j = 0; j < CookieStand.prototype.allShopArray.length; j++) {
                hourTotal += CookieStand.prototype.allShopArray[j].cookiesEachHour[i];
             totalOfTotals += CookieStand.prototype.allShopArray[j].cookiesEachHour[i];
        }
            worldwideHourlyTotalElem.textContent = `${hourTotal}`;
    }


    //Creating a variable to hold the grand total of all sales worldwide inside of
    const wordwideGrandTotalElem = document.createElement('th');
    //Adding up all of the totals to reach the grand worldwide total
    wordwideGrandTotalElem.textContent = `${totalOfTotals}` ;
    //Appending that worldwide grand total to the footer row here, at the very end of the row
    worldwideSalesPerHourElem.appendChild(wordwideGrandTotalElem);


    //Appending this entire article that was created (an article with 1 table row tr containing 3 table headers th's inside it) into the container element you created on the page
    containerElem.appendChild(worldwideSalesPerHourElem);
}






//====================================================
//     ASSIGN THE COOKIESTAND CONSTRUCTOR TO EACH LOCATION
//==================================================== 

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3);
const lima = new CookieStand('Lima', 2, 16, 4.6);


//Console logging for two of the cities to double check that the numbers on screen match to what was generated
console.log(seattle)
console.log(tokyo)














//====================================================
//    TELL THE SOFTWARE TO RUN
//====================================================

//Rendering header before the location-specific data
headerTimeSlot();

//Running the commands, causing stuff to show up on the screen
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//Rendering the footer after the location-specific data
footerTotals();


















//=====================================================
//   LEFTOVER NOTES TO MYSELF
//=====================================================
// Oops! The whole point of using a constructor function was that I should have just written
//
// const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
// const dubai = new CookieStand('Dubai', 11, 38, 3.7);
// const paris = new CookieStand('Paris', 20, 38, 2.3);
// const lima = new CookieStand('Lima', 2, 16, 4.6);
//
//INSTEAD OF WRITING OUT ALL OF THIS:
//
// function TokyoCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// TokyoCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const tokyo = new TokyoCookieStand('Tokyo', 3, 24, 1.2, []);


// function DubaiCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// DubaiCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const dubai = new DubaiCookieStand('Dubai', 11, 38, 3.7, []);


// function ParisCookieStand(city, min, max, avgCookies) {
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// ParisCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const paris = new ParisCookieStand('Paris', 20, 38, 2.3, []);


// function LimaCookieStand(city, min, max, avgCookies,){
//     this.city = city;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
//     this.sales = this.generateEstimate();
// }
// LimaCookieStand.prototype.generateEstimate = function(){
//     return [];    
// }
// const lima = new LimaCookieStand('Lima', 2, 16, 4.6, []);




// ==================================================================

//I could have used the following function FOR loop instead of typing out everything below because I have an hours array in the code
//      for (let i = 0; i<hours.length; i++);{
//    const currentHour = hours[i];


//     constsixAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(sixAmHeaderCell);
//     sixAmHeaderCell.textContent = "6am";

//     constsevenAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(sevenAmHeaderCell);
//     sevenAmHeaderCell.textContent = "7am";

//     consteightAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(eightAmHeaderCell);
//     eightAmHeaderCell.textContent = "8am";

//     constnineAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(nineAmHeaderCell);
//     nineAmHeaderCell.textContent = "9am";

//     consttenAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(tenAmHeaderCell);
//     tenAmHeaderCell.textContent = "10am";

//     constelevenAmHeaderCell = document.createElement('th');
//     headerRow.appendChild(elevenAmHeaderCell);
//     elevenAmHeaderCell.textContent = "11am";

//     constnoonHeaderCell = document.createElement('th');
//     headerRow.appendChild(noonHeaderCell);
//     noonHeaderCell.textContent = "noon";

//     constonePmHeaderCell = document.createElement('th');
//     headerRow.appendChild(onePmHeaderCell);
//     onePmHeaderCell.textContent = "1pm";

//     consttwoPmHeaderCell = document.createElement('th');
//     headerRow.appendChild(twoPmHeaderCell);
//     twoPmHeaderCell.textContent = "2pm";

//     constthreePmHeaderCell = document.createElement('th');
//     headerRow.appendChild(threePmHeaderCell);
//     threePmHeaderCell.textContent = "3pm";

//     constfourPmHeaderCell = document.createElement('th');
//     headerRow.appendChild(fourPmHeaderCell);
//     fourPmHeaderCell.textContent = "4pm";

//     constfivePmHeaderCell = document.createElement('th');
//     headerRow.appendChild(fivePmHeaderCell);
//     fivePmHeaderCell.textContent = "5pm";

//     constsixPmHeaderCell = document.createElement('th');
//     headerRow.appendChild(sixPmHeaderCell);
//     sixPmHeaderCell.textContent = "6pm";

//     constsevenPmHeaderCell = document.createElement('th');
//     headerRow.appendChild(sevenPmHeaderCell);
//     sevenPmHeaderCell.textContent = "7pm";

//     constlocationTotalsHeaderCell = document.createElement('th');
//     headerRow.appendChild(locationTotalsHeaderCell);
//     locationTotalsHeaderCell.textContent = "Location Totals";







//calculate Daily hourly total and overall total for all locations using nested for loop
//  let totalOfTotals = 0;
// for (let i=0; i < timeSlot.length; i++) {
//     let hourTotal = 0;
//     const hourTotalData = document.createElement("td");
//     headerRowTotal.appendChild(hourlyTotalData);
//     for (let j = 0; j < cities.length; j++) {
//         hourTotal += cities[j].hourlyCookies[i];
//  totalOfTotals += 
//     }
//     hourlyTotalData.textContent = hourTotal;
//     totalAllLocations += hourTotal;
//     hourlyTotalData.classList.addlkj;lj l;j l;j lj lj lj 
// }







//Loop through the hours and create cells for hourly sales
// let sales = store.cookieSales();
// for (let i=0; i <hours.length; i++) {
//     let hourCell = document.createElement('td');
//     tableRow.appendChild(hourCell);
//     hourCell.textContent = sales[i];
// }


// //Calculate and add the daily total cell
// let totalDailySales = 0;
// for (let i = 0; i < sales.length; i++){
//     totalDailySales += sales[i];
// }

//     let totalCell = document.createElement('td');
//     tableRow.appendChild(totalCell);
//     totalCell.textContent = totalDailySales;
//


// function renderFooterRow(tableElement)


//function renderFooterRow()
