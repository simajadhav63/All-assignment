
function calculateAge() {
  // Get the birthdate value from the input field
  var birthdateInput = document.getElementById("birthdate").value;

  // Create a Date object from the birthdate string
  var birthdate = new Date(birthdateInput);

  // Get the current date
  var currentDate = new Date();

  // Calculate the difference in milliseconds
  var difference = currentDate - birthdate;

  // Convert milliseconds to years
  var ageInYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

  // Calculate the remaining milliseconds after years are subtracted
  difference -= ageInYears * (1000 * 60 * 60 * 24 * 365.25);

  // Convert the remaining milliseconds to months
  var ageInMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * (365.25 / 12)));

  // Calculate the remaining milliseconds after months are subtracted
  difference -= ageInMonths * (1000 * 60 * 60 * 24 * (365.25 / 12));

  // Convert the remaining milliseconds to days
  var ageInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Display the age
  var ageLabel = ageInYears + " years " + ageInMonths + " months " + ageInDays + " days";
    document.getElementById("age").textContent = ageLabel;
    document.getElementById("yearsLabel").style.display = "block"; // Display the "years" label

}
