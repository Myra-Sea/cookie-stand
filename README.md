# Lab: Salmon Cookies

Lab project for Code 201 second week at CodeFellows

Read this lab assignment in its entirety before beginning your lab. You may want to [open it in a new tab](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/).

<br>

## 🐟 Problem Domain 🐟

Your friend Pat has come up with a business idea by combining his love for sweets and his passion for healthy ecosystems. Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon and are suitable for both humans and salmon to enjoy.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs a proof of concept application to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

* The minimum number of customers per hour.
* The maximum number of customers per hour.
* The average number of cookies purchased per customer.

Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in implementing the design work and construction of a public-facing page as well. The design team has created a logo image (below), and the framework for the look and feel of the website including the color scheme, fonts, and additional images for the public facing site.

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that matches the mock-up created by the design team, and includes the required information and assets.

You’ve got a lot to do. _Plan your work, and work your plan._

<br>

## 🐟 Instructions 🐟

Before you begin, create a new repository within GitHub called “cookie-stand”. Make sure that this repository is properly set up with a license and a readme. Clone this repo down to your local machine.

Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html). You’ll also need to create at least one JavaScript file. For example, `app.js`.

<br>

## 🐟 Sales Data 🐟

Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

1. Store the min/max hourly customers, and the average cookies per customer, in object properties.
2. Generate a random number of customers that can be used to simulate hourly sales, using [Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).
3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.
5. Display the values of each array as unordered lists in the browser.
6. Calculating the sum of these hourly totals; your output for each location should look like this:

    Seattle

    * 6am: 16 cookies
    * 7am: 20 cookies
    * 8am: 35 cookies
    * 9am: 48 cookies
    * 10am: 56 cookies
    * 11am: 77 cookies
    * 12pm: 93 cookies
    * 1pm: 144 cookies
    * 2pm: 119 cookies
    * 3pm: 84 cookies
    * 4pm: 61 cookies
    * 5pm: 23 cookies
    * 6pm: 42 cookies
    * 7pm: 57 cookies
    * Total: 875 cookies

### Lab 6

Display the hourly total lists for each store location on sales.html as shown at [this link for the “Sales Data - Initial” wireframe](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/wireframes/sales-list.png). We will be adding features to this application and working with its layout throughout the week, in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. **Make sure to make each location is its own JavaScript object.**





## Lighthouse Score for Lab 8:

![A screenshot of the 95% accessibility score from Lighthouse](images/Screenshot2023-11-04.png)

## Final Lighthouse Score:

![A screenshot of the 97% accessibility score from Lighthouse](images/Screenshot2023-11-10.png)
