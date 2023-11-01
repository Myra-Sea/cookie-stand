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

// for example, to create an element to represent the article, you could write
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

//Using the DOM to access the <div> in the HTML
//let root = document.getElementsById('root'),
const root = document.getElementsById('root');
//const is used instead of let because is only ever meant to equal


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
    sales: [],
    //The estimated sales per hour is going to be in the array that gets displayed in the column next to the displayed hour (which is in the array called timeSlot). Continuing to follow the example of using let object = {key: value} would result in let seattle ={estimate: simulatedSalesNumber}  but that should be changed to what's below because... um... well, I'm not sure why... yet.
    estimate:  function(){
        this.sales = estimateSales(this);},
    //which we can call on later using seattle.estimate
}

// Now repeating it for the other cities...

// For Tokyo:
//  the random number of customers needs to be between 3 and 24
// the average number of cookies purchased per sale is 1.2

let tokyo = {
    city: 'Tokyo',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    sales: [],
    estimate:  function(){
        this.sales = estimateSales(this);},
}

// For Dubai:
// the random number of customers needs to be between 11 and 38
// the average number of cookies per sale is 3.7

const dubai = {
    city: 'Dubai',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    sales: [],
    estimate:  function(){
        this.sales = estimateSales(this);},
}


// For Paris:
// the random number of customers needs to be between 20 and 38
// the average number of cookies per sale is 2.3

const paris = {
    city: 'Paris',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    sales: [],
    estimate:  function(){
        this.sales = estimateSales(this);},
}


// For Lima:
// the random number of customers needs to be between 2 and 16
// the average number of cookies per sale is 4.6

const lima = {
    city: 'Lima',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    sales: [],
    estimate:  function(){
        this.sales = estimateSales(this);},
}



// function simulatedSalesNumber() {
//     seattle.sales = [6,7,8,9,10,11,12,1,2,3,4];
// }


//To access the value of the estimate key, you need to use object.estimate
seattle.estimate();
tokyo.estimate();
paris.estimate();
lima.estimate();



function estimateSales(cookieStand){
    const sales = [];
    for(let i=0; i<hours.length; i++) {
        const numberCustomers = randomInRange(cookieStand.minCustomers, cookieStand.maxCustomers);
        const hourSales = math.ceil(numberCustomers * cookieStand.avgCookies); 
        sales.push(hourSales);
    }
    return sales;
}


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}


//function ...


//To create an element to insert into the HTML, we can use either an <article> or a <section> per cookie stand.  So let's use article
///Below creates a new article element called cookieArticle
let cookieArticle = document.createElement('article');
root.appendChild(cookieArticle);


//Creating the headings inside of the HTML would be:
let heading = document.createElement('h2');
cookieArticle.appendChild(heading);
heading.textContent = city.location;
// That should make the city appear on the screen

//There's no need to count how many hours, and we shouldn't either because hours of operation could change.  So it should instead be inferred by the length of the array.
//Creating an unordered list in the HTML is:
let hoursList = document.createElement('ul');
cookieArticle.appendChild(hoursList);

for(let i=0; i<seattle.sales.length; i++) {
    const salesItem = document.createElement('li');
    hoursList.appendChild(salesItem);
    const salesInfo = `${timeSlot[i]}: ${seattle.sales[i]} cookies`;
    salesItem.textContent = salesInfo;
}
//That should create the 2 column list of the times (not yet in their correct form) followed by a column that is the list of the contents of the array from line 53

//Add to the above
//let cookiesThisHour = city.sales[i];
//totalSold += cookiesThisHour;
// let salesInfo = `${hours[i]}: ${cookiesThisHour[i]} cookies`;

let totalSold = 0;


//Now to add the line at the bottom that is the totals
const totalCookie = document.createElement('li');
hoursList.appendChild(totalCookie);
const totalInfo = 'Total: ${totalSold} cookies sold';
totalCookie.textContent = totalInfo;
//It appends to what we set as the ul on line 77



//render seattle
//render tokyo
//render 
//render 
//render 