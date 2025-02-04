DSA with JS - Self Paced
JS Tutorial
JS Exercise
JS Interview Questions
JS Array
JS String
JS Course
JS Object
JS Operator
JS Date
JS Error
JS Projects
JS Set
JS Map
JS RegExp
JS Math
JS Number
JS Boolean
JS Examples
JS Free JS Course
JS A to Z Guide
JS Formatter
▲
Open In App
Design a Tip Calculator using HTML, CSS and JavaScript
Last Updated : 27 Dec, 2023
The tip is the money given as a gift for good service, to the person who serves you in a restaurant. In this project, a simple tip calculator is made which takes the billing amount, type of service, and the number of persons as input. As per the three inputs, it generates a tip for the serving person. In this article, we are going to learn how to design a Tip Calculator using HTML, CSS, and JavaScript.

Prerequisites:
HTML
CSS
JavaScript
Approach
Use HTML to give proper structure to your project.
Use CSS for styling
In JavaScript,
The script is triggered when the window is fully loaded, binding the calculateTip function to the “Calculate” button’s click event.
The calculateTip function retrieves input values for amount, number of persons, and service type from corresponding HTML elements.
Input validation checks if the amount is empty and the service type is set to ‘Select’. If so, an alert is displayed, and further execution is halted.
Display logic adjusts the visibility of the ‘each’ element based on the number of persons: hidden if there is one person and visible otherwise.
Tip calculation involves multiplying the amount, and service type, and dividing by the number of persons. The result is displayed with proper formatting on the webpage.
Example: In this example, we are following the above approach.

Javascript
HTML
CSS
body {
    background-color: #001f4f;
    font-family: "Raleway", sans-serif;
}
 
.container {
    width: 350px;
    height: 500px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 20px;
}
 
h1 {
    position: absolute;
    left: 50%;
    top: -60px;
    width: 300px;
    transform: translateX(-50%);
    background-color: #ff851b;
    color: #fff;
    font-weight: 100;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 18px;
    text-align: center;
    padding: 10px;
}
 
.wrapper {
    padding: 20px;
}
 
input,
select {
    width: 80%;
    border: none;
    border-bottom: 1px solid #0074d9;
    padding: 10px;
}
 
input:focus,
select:focus {
    border: 1px solid #0074d9;
    outline: none;
}
 
select {
    width: 88% !important;
}
 
button {
    margin: 20px auto;
    width: 150px;
    height: 50px;
    background-color: #39cccc;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
}
 
.tip {
    text-align: center;
    font-size: 18px;
    display: none;
}
