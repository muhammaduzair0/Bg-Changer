// Select the button for applying input color
const applyColorBtn = document.getElementById("applyColorBtn");

// Select the button for applying input color
const randomColorBtn = document.getElementById("colorBtn");

// Select the button for stopping color change
const stopColorBtn = document.getElementById("stopColorBtn");

// Select the input field
const colorInput = document.getElementById("colorInput");

const titleText = document.getElementById("textChange");

// Select the body for background change
const body = document.body;

let digits = "01234567789ABCDEF";
let color = "#";
let intervalID;

const getColorValue = () => {
  let userColor = colorInput.value; // Get the value from input field
  console.log(userColor);
  body.style.backgroundColor = userColor;
  titleText.textContent = `Current Color: ${userColor}`;
  // return userColor;
};

hexColorCodeGenerator = () => {
  for (let i = 0; i < 6; i++) color += digits[Math.floor(Math.random() * 16)];
  console.log(color, "generated color");

  body.style.backgroundColor = color;
  titleText.textContent = `Current Color: ${color}`;
  color = "#";
  console.log(color, "color");
  randomColorBtn.disabled = true;
};

randomColorBtn.addEventListener("click", () => {
  setTimeout(() => {
    intervalID = setInterval(() => {
      hexColorCodeGenerator();
    }, 1000);
  }, 1000);
});

stopColorBtn.addEventListener("click", () => {
  clearInterval(intervalID);
  console.log(intervalID); // Stop the interval
  intervalID = null; // Reset interval ID
  randomColorBtn.disabled = false;

  console.log("Color change stopped.");
});

applyColorBtn.addEventListener("click", () => getColorValue());
