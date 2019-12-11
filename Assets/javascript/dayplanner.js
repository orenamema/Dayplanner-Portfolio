// We create the current date

var CurrentDate = moment().format("dddd, MMMM Do YYYY");
var CurrentHour = Number(moment().format("HH"));

// console.log(CurrentHour);

$("#theDate").text( CurrentDate );

hour_arr = ["9AM", "10AM", "11AM", "12PM", 
            "1PM", "2PM", "3PM", "4PM", "5PM"];

// We convert to military time
to_time = {"9AM": 9, "10AM": 10, "11AM": 11, 
            "12PM": 12, "1PM":13, "2PM":14, 
            "3PM":15, "4PM":16, "5PM":17};

var the_hours = $("#theHours");

// var 
// console.log("here OUT ");

for (var i=0; i < hour_arr.length; i++){
    // we create the rows of the table
    var hour_row = $("<div>");
    var hour1 = $("<textarea>");
    hour1.attr("id", "text" + hour_arr[i]);
    hour1.attr("class", "text-box");


    the_hours.append(hour_row);
    hour_row.attr("class", "row rounded");
    hour_row.attr("id", hour_arr[i]);

    var time_box = $("<div>");
    time_box.attr("class", "col");
    time_box.text(hour_arr[i]);
    var text_box = $("<div>");

    text_box.append(hour1);
    text_box.attr("class", "col-8");


//background colors
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
    var save_box = $("<div>");
    save_box.attr("class", "col rounded-right");
    save_box.css("background-color", "#4aaaa5")

    hour_row.append(time_box);
    hour_row.append(text_box);
    hour_row.append(save_box);

    // <img src="..." class="rounded float-left" alt="..."></img>

    var saver = $("<img>");
    saver.attr("class", "rounded");
    saver.attr("id", "img" + hour_arr[i]);
    saver.attr("alt", "save the content");
    saver.attr("src", "http://www.myiconfinder.com/uploads/iconsets/256-256-5522ef02c3bcb2c8389eda0bbc2f4815.png");
    save_box.append(saver);

    saver.click(function() {
        var time_part = this.id.substring(3,this.id.length);
        var text_in_box = document.getElementById("text" + this.id.substring(3,this.id.length)).value;
        localStorage.setItem(time_part, text_in_box);
        console.log(time_part,text_in_box);
    });

}

//document.getelementbyid localstorage.getitem