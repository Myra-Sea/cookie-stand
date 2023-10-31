
// Within a table, I need two columns:

// In the first column I need to generate a list of times between 6am and 7pm
//The final cell on that column needs to say the word "Total"

//In the second column, I need to generate a random number

//The table needs to be duplicated five times.  Once underneath a "Seattle" heading, and then again under a "Tokyo" heading, "Dubai" heading, "Paris" heading, and "Lima".  It will be the same hours for all countries in the first column, but the second column will have more strict constraints than Seattle for the other countries.

//For Seattle: 
// the random number of customers needs to be between 23 and 65
// the average number of cookies purchased per sale is 6.3

// For Tokyo:
//  the random number of customers needs to be between 3 and 24
// the average number of cookies purchased per sale is 1.2

// For Dubai:
// the random number of customers needs to be between 11 and 38
// the average number of cookies per sale is 3.7

// For Paris:
// the random number of customers needs to be between 20 and 38
// the average number of cookies per sale is 2.3

// For Lima:
// the random number of customers needs to be between 2 and 16
// the average number of cookies per sale is 4.6


//Further details from the lab instructions themselves:
// Store the min/max hourly customers, and the average cookies per customer, in object properties.
// Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals, display the lists on sales.html as shown in the “Sales Data - Initial” wireframe. 

// Make sure to make each location is its own JavaScript object.