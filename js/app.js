// This lab uses objects
// An object is a collection of keys and values
// You create a JavaScript object by using curly brackets
// For example, you could write
// let kitten1 = {};

// It can, of course, also be expressed using const instead of let
// const kitten1 = {};

// kitten1 is the object

// Objects have properties
// For example, the lecture demo kittens have names as properties

// In that example, the word "name" would be the key
// For the first kitten in the lecture demo the value of that name key was Frankie
// Frankie is a string

// The lecture demo expressed the key-value assignment in the following format:
// let kitten1 = {
//     name: 'Frankie',
//   }

// which could, of course, also be expressed as
// const kitten1 = {
//       name: 'Frankie',
// }

// Objects are simply an association between a key and a value
// To access a particular value, you access it via its key
// An analogy would be how in a dictionary, the key would be the word you are looking up and the value would be the word's definition
// Using the kitten lecture example, you would access the string 'Frankie' using kitten1.name
// Every so often you will need to use bracket notation instead of a dot and what you put inside of the brackets is a string that represents the key's label.  So in that case, the string 'Frankie' which is the value, would be accessed by writing kitten1['name']

// If a key can have a list of values, then go ahead and list those as an array
// For example, from the lecture demo:
// let kitten1 = {
//  interests: ['catnip', 'chasing yarn', 'napping'],
//}

// Like in that example, remember to still use a comma after the key-value's array for the object instead of accidentally using a semicolon!


// JavaScript has the ability to access the HTML file's contents and modify or add to it
// That is what the DOM (Document Object Model) is used for
// Within JavaScript running in a browser there is a mobile value that is accessible. It is an object itself.  It is called "document" and it has a LOT of ways of accessing and interacting with everything on your webpage.

// To access the <div> in the HTML, you need to basically ask the browser
// document.GetMeThatThingById('id is between quotes');
// You do so using getElementById('id is between quotes');
// For example, if the HTML tag was <div id="kittenProfiles">
// Then the requesting piece of the code would be
// document.get ElementById('kittenProfiles');
// For example, with the demo kitten website the full line you would write is
// let kittenContainerElement = document.getElementById('kittenProfiles');

//That will open up access to that entire section of code.  Everything between the <div> tags
//Once you have accessed that section of HTML code, you can begin entering things into it using JavaScript

// In order to input the content between the <article> tags that are inside of the <div> tags, we will use the document method to create an element that represents it

// Create an element by using document.createElement
// and place the kind of element inside of single quotes inside of parentheses afterwards

// So, for example, to create an element to represent the article, you could write
// let newArticleElement = document.createElement('article')


//--------------------------------------------------------------------------
// To fulfill Lab 6:

// I need two columns
// In the first column I need to generate a list of times between 6am and 7pm
//The final cell on that column needs to say the word "Total"

//In the second column, I need to generate a random number

//Those two columns needs to be duplicated five times.  Once underneath a "Seattle" heading, and then again under a "Tokyo" heading, "Dubai" heading, "Paris" heading, and "Lima".  It will be the same hours for all countries in the first column, but the second column will have more strict constraints than Seattle for the other countries.

// The names of the cities will be string values, similar to how in the kitten example it was 
//    let kitten2 = {
//    name: 'jumper',

//Further details from the lab instructions themselves:
// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals, display the lists on sales.html as shown in the “Sales Data - Initial” wireframe. 
// Make sure to make each location is its own JavaScript object.

//------------------------------------------------------------------------------


//Code for Lab 6 starts here




'use strict';

//Using the DOM to access the <section> in the HTML
const javascriptContainer = document.getElementById('javascriptGoesHere');
//const is used instead of let


//Creating a value called timeSlot and assigning the list of business hours values to it in an array
const timeSlot = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
//const is used instead of let because the timeSlot column is only ever mean to equal this array



//The code below is defining the following keys for the seattle object:  city, min, max, avgCookies, sales, and estimate

//For Seattle, the random number of customers needs to be between 23 (which is the min) and 65 (which is the max)
// the average number of cookies purchased per customer (which is avgCookies) is 6.3
// and from that we can calculate and store the simulated number of cookies purchased during each hour (which is the object called estimate)

const seattle = {
    city: 'Seattle',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    custEachHour: [],
    cookiesEachHour: [],
    //The estimated sales per hour is going to be in the array that gets displayed in the column next to the displayed hour (which is in the array called timeSlot). Continuing to follow the example of using let object = {key: value} would result in let seattle ={estimate: simulatedSalesNumber}  but that should be changed to what's below because... um... well, I'm not sure why... yet.
    estimate:  function(){
        this.cookiesEachHour = estimateSales(this);},
    //which we can call on later using seattle.estimate
}

//To access the value of the estimate key, you need to use object.estimate
seattle.estimate();






//-------------------------------
// DOM section starts here
//_______________________________


//To create an element to insert into the HTML, we can use either an <article> or a <section> per cookie stand.  Let's use article
///Below creates a new article element called cookieArticle
let cookieArticle = document.createElement('article');
javascriptContainer.appendChild(cookieArticle);
//Now that an <article> element exists, we can place the <h2> heading elements inside of it!

//Creating the h2 headings inside of the HTML would be:
let heading = document.createElement('h2');
cookieArticle.appendChild(heading);
heading.textContent = seattle.city;
// That should make the city appear on the screen


//Also inside of the <article> element should be the unordered list that displays the business hours
//There's no need to count how many hours, and we shouldn't either because hours of operation could change.  So it should instead be inferred by the length of the array.
//Next to that, we also need to create an unordered list of the estimated number of cookies sales per hour
//Creating an unordered list in the HTML is:
let hoursList = document.createElement('ul');
cookieArticle.appendChild(hoursList);


//The next section below should create the 2 column list of the times followed by a column that is the list of the contents of the array


    for(let i=0; i<seattle.cookiesEachHour.length; i++) {
        let salesItem = document.createElement('li');
        hoursList.appendChild(salesItem);
        const salesInfo = `${timeSlot[i]}: ${seattle.cookiesEachHour[i]} cookies`;
        salesItem.textContent = salesInfo;
    }
    
    
        //generate random customers per hour
    function estimateCustomers(store){
        for(let i=0; i<timeSlot.length; i++) {
            const numberCustomers = randomInRange(store.min, store.max);
            //push the random number of customers into the custEachHour array
            store.custEachHour.push(numberCustomers);
        }
    }
    
    function estimateSales(store){
        estimateCustomers(store);
        for(let i=0; i<timeSlot.length; i++) {
            const hourSales = Math.ceil(store.custEachHour[i] * store.avgCookies); 
            store.cookiesEachHour.push(hourSales);
        }
        return store.cookiesEachHour;
    }
    
    
    function randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min);
    }
    

    //Creating the line showing total sold

    let totalSold = 0;
for(let i=0; i<timeSlot.length; i++) {
    totalSold+=seattle.cookiesEachHour[i];
} 

//Now to add the line at the bottom that is the totals
const totalCookie = document.createElement('li');
hoursList.appendChild(totalCookie);
const totalInfo = `Total: ${totalSold} cookies sold`;
totalCookie.textContent = totalInfo;
//It appends to what we set as the ul on line 77





//--------------------------------------------
//--------------------------------------------
    // Now repeating the process for the other cities...
//-----------------------------------------------
// Tokyo

// For Tokyo:
// //  the random number of customers needs to be between 3 and 24
// // the average number of cookies purchased per sale is 1.2

let tokyo = {
    city: 'Tokyo',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    custEachHour: [],
    cookiesEachHour: [],
    estimate:  function(){
        this.cookiesEachHour = estimateSales(this);},
}

// //To access the value of the estimate key, you need to use object.estimate
tokyo.estimate();


///Create a new section element for Tokyo called cookieSection1
let cookieSection1 = document.createElement('section');
javascriptContainer.appendChild(cookieSection1);


//Create an <h2> heading inside of the new section:
let heading2 = document.createElement('h2');
cookieSection1.appendChild(heading2);
heading2.textContent = tokyo.city;
// That should make the city appear on the screen



//Create an unordered list for Tokyo:
let hoursList2 = document.createElement('ul');
cookieSection1.appendChild(hoursList2);

for(let i=0; i<tokyo.cookiesEachHour.length; i++) {
    let salesItem2 = document.createElement('li');
    hoursList2.appendChild(salesItem2);
    const salesInfo2 = `${timeSlot[i]}: ${tokyo.cookiesEachHour[i]} cookies`;
    salesItem2.textContent = salesInfo2;
}

//Generates random customers per hour
function estimateCustomers(store){
    for(let i=0; i<timeSlot.length; i++) {
        const numberCustomers2 = randomInRange(store.min, store.max);

//Push that random number of customers into the custEachHour array
        store.custEachHour.push(numberCustomers2);
    }
}

function estimateSales(store){
    estimateCustomers(store);
    for(let i=0; i<timeSlot.length; i++) {
        const hourSales = Math.ceil(store.custEachHour[i] * store.avgCookies); 
        store.cookiesEachHour.push(hourSales);
    }
    return store.cookiesEachHour;
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


//Create the total sold loop
let totalSold2 = 0;
for(let i=0; i<timeSlot.length; i++) {
totalSold2+=tokyo.cookiesEachHour[i];
} 

//Add a line at the bottom showing that total
const totalCookie2 = document.createElement('li');
hoursList2.appendChild(totalCookie2);
const totalInfo2 = `Total: ${totalSold2} cookies sold`;
totalCookie2.textContent = totalInfo2;
//It appends to what we set as the ul







// ----------------------------------------------
// Dubai
//-----------------------------------------------

// For Dubai:
// the random number of customers needs to be between 11 and 38
// the average number of cookies per sale is 3.7

const dubai = {
    city: 'Dubai',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    custEachHour: [],
    cookiesEachHour: [],
    estimate:  function(){
        this.cookiesEachHour = estimateSales(this);},
}

dubai.estimate();

//Creates the Dubai heading:
let cookieArticle2 = document.createElement('article');
javascriptContainer.appendChild(cookieArticle2);

let heading3 = document.createElement('h2');
cookieArticle2.appendChild(heading3);
heading3.textContent = dubai.city;


//Create an unordered list for Dubai:
let hoursList3 = document.createElement('ul');
cookieArticle2.appendChild(hoursList3);


for(let i=0; i<dubai.cookiesEachHour.length; i++) {
    let salesItem3 = document.createElement('li');
    hoursList3.appendChild(salesItem3);

    let salesInfo3 = `${timeSlot[i]}: ${dubai.cookiesEachHour[i]} cookies`;
    salesItem3.textContent = salesInfo3;
}

//Generate random customers per hour
function estimateCustomers(store){
    for(let i=0; i<timeSlot.length; i++) {
        let numberCustomers3 = randomInRange(store.min, store.max);

// Push the random number of customers into the custEachHour array
        store.custEachHour.push(numberCustomers3);
    }
}

function estimateSales(store){
    estimateCustomers(store);
    for(let i=0; i<timeSlot.length; i++) {
        const hourSales = Math.ceil(store.custEachHour[i] * store.avgCookies); 
        store.cookiesEachHour.push(hourSales);
    }
    return store.cookiesEachHour;
}


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


//Create the total sold loop
let totalSold3 = 0;
for(let i=0; i<timeSlot.length; i++) {
totalSold3+=dubai.cookiesEachHour[i];
} 

//Add that total sold line at the bottom
const totalCookie3 = document.createElement('li');
hoursList3.appendChild(totalCookie3);
const totalInfo3 = `Total: ${totalSold3} cookies sold`;
totalCookie3.textContent = totalInfo3;





// ----------------------------------------------
// Paris
//-----------------------------------------------

// For Paris:
// the random number of customers needs to be between 20 and 38
// the average number of cookies per sale is 2.3

const paris = {
    city: 'Paris',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    custEachHour: [],
    cookiesEachHour: [],
    estimate:  function(){
        this.cookiesEachHour = estimateSales(this);},
}


paris.estimate();


// //Creates the Paris heading:
let cookieSection2 = document.createElement('section');
javascriptContainer.appendChild(cookieSection2);

let heading4 = document.createElement('h2');
cookieSection2.appendChild(heading4);
heading4.textContent = paris.city;


// //Create an unordered list for Paris:
let hoursList4 = document.createElement('ul');
cookieSection2.appendChild(hoursList4);


for(let i=0; i<paris.cookiesEachHour.length; i++) {
    let salesItem4 = document.createElement('li');
    hoursList4.appendChild(salesItem4);

    let salesInfo4 = `${timeSlot[i]}: ${paris.cookiesEachHour[i]} cookies`;
    salesItem4.textContent = salesInfo4;
}

//Generate random customers per hour
function estimateCustomers(store){
    for(let i=0; i<timeSlot.length; i++) {
        let numberCustomers4 = randomInRange(store.min, store.max);

// Push the random number of customers into the custEachHour array
        store.custEachHour.push(numberCustomers4);
    }
}

function estimateSales(store){
    estimateCustomers(store);
    for(let i=0; i<timeSlot.length; i++) {
        const hourSales = Math.ceil(store.custEachHour[i] * store.avgCookies); 
        store.cookiesEachHour.push(hourSales);
    }
    return store.cookiesEachHour;
}


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


//Create the total sold loop
let totalSold4 = 0;
for(let i=0; i<timeSlot.length; i++) {
totalSold4+=paris.cookiesEachHour[i];
} 

//Add that total sold line at the bottom
const totalCookie4 = document.createElement('li');
hoursList4.appendChild(totalCookie4);
const totalInfo4 = `Total: ${totalSold4} cookies sold`;
totalCookie4.textContent = totalInfo4;








// ----------------------------------------------
// Lima
//-----------------------------------------------

// For Lima:
// the random number of customers needs to be between 2 and 16
// the average number of cookies per sale is 4.6

const lima = {
    city: 'Lima',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    custEachHour: [],
    cookiesEachHour: [],
    estimate:  function(){
        this.cookiesEachHour = estimateSales(this);},
}

lima.estimate();


// //Creates the Dubai heading:
// let cookieArticle2 = document.createElement('article');
// javascriptContainer.appendChild(cookieArticle2);

// let heading3 = document.createElement('h2');
// cookieArticle2.appendChild(heading3);
// heading3.textContent = dubai.city;


// //Create an unordered list for Dubai:
// let hoursList3 = document.createElement('ul');
// cookieArticle2.appendChild(hoursList3);


// for(let i=0; i<dubai.cookiesEachHour.length; i++) {
//     let salesItem3 = document.createElement('li');
//     hoursList3.appendChild(salesItem3);

//     let salesInfo3 = `${timeSlot[i]}: ${dubai.cookiesEachHour[i]} cookies`;
//     salesItem3.textContent = salesInfo3;
// }

// //Generate random customers per hour
// function estimateCustomers(store){
//     for(let i=0; i<timeSlot.length; i++) {
//         let numberCustomers3 = randomInRange(store.min, store.max);

// // Push the random number of customers into the custEachHour array
//         store.custEachHour.push(numberCustomers3);
//     }
// }

// function estimateSales(store){
//     estimateCustomers(store);
//     for(let i=0; i<timeSlot.length; i++) {
//         const hourSales = Math.ceil(store.custEachHour[i] * store.avgCookies); 
//         store.cookiesEachHour.push(hourSales);
//     }
//     return store.cookiesEachHour;
// }


// function randomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
// }


// //Create the total sold loop
// let totalSold3 = 0;
// for(let i=0; i<timeSlot.length; i++) {
// totalSold3+=dubai.cookiesEachHour[i];
// } 

// //Add that total sold line at the bottom
// const totalCookie3 = document.createElement('li');
// hoursList3.appendChild(totalCookie3);
// const totalInfo3 = `Total: ${totalSold3} cookies sold`;
// totalCookie3.textContent = totalInfo3;





