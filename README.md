# Lab: Salmon Cookies

Lab projects for Code 201 second week at CodeFellows.

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

### 🍪 Lab 6 Instructions 🍪

Before you begin, create a new repository within GitHub called “cookie-stand”. Make sure that this repository is properly set up with a license and a readme. Clone this repo down to your local machine.

Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html). You’ll also need to create at least one JavaScript file. For example, `app.js`.

<br>

#### 🍪 Sales Data 🍪

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

Display the hourly total lists for each store location on sales.html as shown in [this link for the “Sales Data - Initial” wireframe](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/wireframes/sales-list.png). We will be adding features to this application and working with its layout throughout the week, in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

| Location | Min / Cust | Max / Cust | Avg Cookie / Sale |
| ------ | ------ | ------ | ------ |
| Seattle | 23 | 65 | 6.3 |
| Tokyo | 3 | 24 | 1.2 |
| Dubai | 11 | 38 | 3.7 |
| Paris | 20 | 38 | 2.3 |
| Lima | 2 | 16 | 4.6 |

These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. **Make sure to make each location is its own JavaScript object.**

#### 🍪 Lab 6 Developer Style Guide 🍪

In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

1. Within your local version of your repo, add `.gitignore` and `.eslintrc.json` files.

2. Conduct regular commits within git.

3. All properties/values and methods should be correctly constructed and given meaningful names.

4. Functions and methods should follow the single-responsibility principle.

5. Use template literals in your JS logic to render the stores as lists on the sales page.

#### 🍪 Additional Resources 🍪

* Read [this](https://mentormate.com/blog/low-fidelity-wireframes-vs-high-fidelity-wireframes/) article and [this](https://www.justinmind.com/wireframe/low-fidelity-vs-high-fidelity-wireframing-is-paper-dead) article on the differences between low-fidelity and high-fidelity wireframes.

* Refer to the [Setting Up a New Project](https://codefellows.github.io/code-201-guide/curriculum/class-02/project-setup) guide document to do the initial file/directory configuration of this project.

<br>

<hr>

<br>

### 🍣 Lab 7 Instructions 🍣

1. Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

2. Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

3. Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following. Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.



1. For every lab within this project, you will be creating a new branch for every day. Create a new branch name that follows the following format class##-feature (example: class06-Objects).

<br>

<br>

## 🐟 Home Page 🐟

Read below for the requirements of your `index.html` page.  All of these requirements will be required for the final submission of the project, so start implementing these early.

In addition to [the provided picture of the fish](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png), your `index.html` file should conform to the following instructions:

1. Our custom sans-serif [Google Font](https://fonts.google.com/) called “Righteous” for use in heading tags (`<h# />`).
   
2. A standard sans-serif web font for sales data (such as Arial, Verdana, or Helvetica).

3. A standard serif web font for text (such as Georgia, Times).

4. Different font colors for all three font uses.

5. Header background = Black

6. Header Navigation = Salmon background, black link text

7. Page Background = White

8. Be thorough in your implementation of the designed layout and overall organization of the page.

9. Run a Lighthouse Accessibility report. In this module, push to achieve a score between 65-80. Add the screenshot of your score to the README.md.

10. Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, etc. 
 Be creative, and again, think about what is meaningful to a typical end user.


## Lighthouse Score for Lab 8:

![A screenshot of the 95% accessibility score from Lighthouse](images/Screenshot2023-11-04.png)

## Final Lighthouse Score:

![A screenshot of the 97% accessibility score from Lighthouse](images/Screenshot2023-11-10.png)
