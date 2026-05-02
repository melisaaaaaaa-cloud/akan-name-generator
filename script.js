document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("akanForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let day = parseInt(document.getElementById("day").value);
        let month = parseInt(document.getElementById("month").value);
        let year = parseInt(document.getElementById("year").value);
        let gender = document.getElementById("gender").value;

        // validation
        if(
            isNaN(day) ||
            isNaN(month) ||
            isNaN(year) ||
            day < 1 ||
            day > 31 ||
            month < 1 ||
            month > 12 ||
            gender === ""
        ){
            alert("Please enter a valid date and select gender.");
            return;
        }
        let date = new Date(year, month - 1, day);

        // check if date is valid
        if (date.getDate(!== day))













        

    }







)









}
)

 document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("akanForm").addEventListener("submit", function (e) {
     e.preventDefault();

     let day = parseInt(document.getElementById("day").value);
     let month = parseInt(document.getElementById("month").value);
     let year = parseInt(document.getElementById("year").value);
     let gender = document.getElementById("gender").value;

     // validation
     if (
       isNaN(day) ||
       isNaN(month) ||
       isNaN(year) ||
       day < 1 ||
       day > 31 ||
       month < 1 ||
       month > 12 ||
       gender === ""
     ) {
       alert("Please enter a valid date and select gender.");
       return;
     }

     let date = new Date(year, month - 1, day);

     // check if date is valid
     if (date.getDate() !== day) {
       alert("Invalid date entered.");
       return;
     }

     let dayOfWeek = date.getDay();

     let days = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
     ];
     let maleNames = [
       "Kwasi",
       "Kwadwo",
       "Kwabena",
       "Kwaku",
       "Yaw",
       "Kofi",
       "Kwame",
     ];
     let femaleNames = [
       "Akosua",
       "Adwoa",
       "Abenaa",
       "Akua",
       "Yaa",
       "Afua",
       "Ama",
     ];

     let akanName;

     if (gender.toLowerCase() === "male") {
       akanName = maleNames[dayOfWeek];
     } else {
       akanName = femaleNames[dayOfWeek];
     }

     document.getElementById("result").innerText =
       `You were born on a ${days[dayOfWeek]}. Your Akan name is ${akanName}.`;

     document.getElementById("akanForm").reset();
   });
 });


