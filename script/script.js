var today = prompt("Please, type day of the week");
/*
if (today === "Monday") {
  alert("Working Day");
}

if (today === "Tuesday") {
  alert("Working Day");
}

if (today === "Wednesday") {
  alert("Working Day");
}

if (today === "Thursday") {
  alert("Working Day");
}

if (today === "Friday") {
  alert("Working Day");
}

if (today === "Saturday") {
  alert("Weekend");
}

if (today === "Sunday") {
  alert("Weekend");
}
*/

if (
  today === "Monday" ||
  today === "Tuesday" ||
  today === "Wednesday" ||
  today === "Thursday" ||
  today === "Friday"
) {
  alert("Working Day");
} else if (today === "Saturday" || today === "Sunday") {
  alert("Weekend");
} else {
  alert("Can not define, please try another value");
}
