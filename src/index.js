function displayHoliday(response) {
  console.log("holiday generated");
  new Typewriter("#holiday", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generateHoliday(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "t7o26f41bc212fa3436aa27360809eab";

  let prompt =
    "User instructions are: Generate a holiday about ${instructionsInput.value}";
  let context =
    "You are a travel sales expert and love to provide a brief holiday infomration like best destination and things to do on the destination.Your mission is to generate a holiday destination and activities for that destination also provide package options in basic HTML.Make sure to follow the user instructions";

  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIkey";
  console.log("Generate holiday");

  console.log("PromPt:${prompt}");
  console.log("Context:${context}");

  axios.get(apiURL).then(displayHoliday);

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
