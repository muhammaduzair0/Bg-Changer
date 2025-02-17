const colorBtn = document.getElementById("colorBtn");

// Select the body for background change
const body = document.body;

let digits = "01234567789ABCDEF";
let color = "#";

hexColorCodeGenerator = () => {
  for (let i = 0; i < 6; i++) color += digits[Math.floor(Math.random() * 16)];
  console.log(color);
  body.style.backgroundColor = color;
  color= '#'
};

colorBtn.addEventListener("click", () => {
  setTimeout(() => {
    setInterval(() => {
      hexColorCodeGenerator();
    }, 1000);
  }, 2000);
});
