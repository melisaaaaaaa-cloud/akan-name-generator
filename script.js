document.getElementById("akanform").addEventListener("submit", function(e) {e.preventDefault();
let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);
let gender = parseInt(document.getElementById("gender").value);

// Validation
if (day < 1|| day > 31 || month < 1 || month > 12 || gender === "" ) { 
alert("please enter a valid date and select gender.");
return;
}
// arrays
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

if (gender === "male") {
    akanName = maleNames[dayOfWeek];
} else{
    akanName = femaleNames[dayOfWeek];
}
// Display result
document.getElementById("result").innerText =
'You were born on a ${days[dayOfWeek]}. Your Akan name is ${akanName}.';

// Reset form
document.getElementById("akanForm").reset();
});
