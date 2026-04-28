document.getElementById("akanform").addEventListener("submit", fucntion(e)) {

}document.getElementById("akanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  // Validation
  if (day < 1 || day > 31 || month < 1 || month > 12 || gender === "") {
    alert("Please enter a valid date and select gender.");
    return;
  }

  // Extract CC and YY
  let CC = Math.floor(year / 100);
  let YY = year % 100;

  // Formula
  let d = (( (CC / 4) - 2 * CC - 1 ) + ((5 * YY) / 4) + ((26 * (month + 1)) / 10) + day) % 7;

  d = Math.floor(d);
  if (d < 0) d += 7;

  // Days + Names
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  document.getElementById("result").innerText =
    `You were born on a ${days[d]}. Your Akan name is ${akanName}.`;
});