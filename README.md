# Dayplanner-Portfolio
# Introduction

In this assignment we are asked to create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:

* The time

* A field to hold user input

* A save button

Clicking on the save button will store the time and user input in `localStorage`.

There are 3 files:

* `index.html`
* `style.css`
* `Dayplanner.js`

## Website

![alt text](https://github.com/orenamema/Dayplanner-Portfolio/raw/master/Assets/Images/scheduler.gif)

![alt text](https://github.com/orenamema/Dayplanner-Portfolio/raw/master/Assets/Images/dayplanner.gif)

## Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

* Each timeblock contains an input field and save button.

* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

* The current day is displayed at the top of the calendar.

* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

In the following screenshot it was 2:30PM therefore the color for the 2PM-3PM was red and all the following hours was in green. The hours that have passed all color coded grey.

![alt text](https://github.com/orenamema/Dayplanner-Portfolio/raw/master/Assets/Images/calendar.png)

Following is the code that change to occur throughout the work day:

```javascript
    console.log(CurrentHour , to_time[hour_arr[i]]);
    if (CurrentHour < to_time[hour_arr[i]]){
        text_box.css("background-color", "green");
    }
    else if (CurrentHour == to_time[hour_arr[i]]){
        text_box.css("background-color", "red");
    }
    else {
        text_box.css("background-color", "grey");
    }

