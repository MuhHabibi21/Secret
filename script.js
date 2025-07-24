// script.js
let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add('active');
}

const noButton = document.getElementById('noBtn');

noButton.addEventListener('mouseenter', () => {
  const container = document.querySelector('.container');
  const containerRect = container.getBoundingClientRect();

  const maxX = container.clientWidth - noButton.offsetWidth;
  const maxY = container.clientHeight - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

document.getElementById("dateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const placeValue = document.querySelector('input[name="tempat"]:checked').value;

  const placeImages = {
    1: "bebek.jpg",
    2: "blokm.jpg",
    3: "tim.jpg",
  };

  document.getElementById("summaryDate").textContent = date;
  document.getElementById("summaryTime").textContent = time;
  document.getElementById("summaryPlace").src = placeImages[placeValue];

  nextPage();
});


// Heart cursor follow
const cursorHeart = document.querySelector(".cursor-heart");
document.addEventListener("mousemove", (e) => {
  cursorHeart.style.left = e.pageX + "px";
  cursorHeart.style.top = e.pageY + "px";
});

// Love bubble effect saat klik
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.className = "floating-heart";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
