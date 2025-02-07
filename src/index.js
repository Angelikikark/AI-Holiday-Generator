function generateHoliday(event) {
  event.preventDefault();

  const holidayTypeInput = document.querySelector("input[type='text']").value;

  const holidayMessage = `Based on your love for ${holidayTypeInput}, here’s a holiday idea: Hiking in the Swiss Alps, exploring small villages, and enjoying local Swiss cuisine.`;

  // Clear previous text
  document.getElementById("holiday").innerHTML = "";

  new Typewriter("#holiday", {
    strings: [based],
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let holidayFormElement = document.querySelector("#holiday-generator-form");
holidayFormElement.addEventListener("submit", generateHoliday);
