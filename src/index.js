function displayHoliday(response) {
  new Typewriter("#holiday", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let holidayFormElement = document.querySelector("#holiday-generator-form");

  if (!holidayFormElement) {
    console.error("Error: Form element not found!");
    return;
  }

  holidayFormElement.addEventListener("submit", generateHoliday);
});

function generateHoliday(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  if (!instructionsInput) {
    console.error("Error: Input field with ID 'user-instructions' not found!");
    return;
  }

  let apiKey = "t7o26f41bc212fa3436aa27360809eab";
  let context =
    "You are a travel expert and love to provide a brief holiday information like best destinations and things to do there. Your mission is to generate a holiday destination and activities for that destination,also keep the response no more than 10 paragraphs and be friendly. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a holiday about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let holidayElement = document.querySelector("#holiday");

  if (!holidayElement) {
    console.error("Error: Holiday element not found!");
    return;
  }

  holidayElement.classList.remove("hidden");
  holidayElement.innerHTML = `<div class="generating">⏳ Generating a holiday about ${instructionsInput.value}...</div>`;

  axios
    .get(apiURL)
    .then(displayHoliday)
    .catch((error) => {
      console.error("API Request Failed:", error);
    });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
