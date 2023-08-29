const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let interval = null;

btnStart.addEventListener("click", () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

 btnStop.addEventListener("click", () => {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(interval);
  
});




