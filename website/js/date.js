
let day = new Date();
document.getElementById("day").innerHTML = day.getDate();

let year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

let month = new Date();
document.getElementById("month").innerHTML = month.getMonth() + 1;


let nameOfDay = new Date();
let weekdays = new Array(7);
weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
let r = weekdays[nameOfDay.getDay()];
document.getElementById("name").innerHTML = r;
