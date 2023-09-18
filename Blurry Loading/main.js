var percentage = document.getElementById("percentage");

function updatePercentage(i) {
  setTimeout(function () {
      percentage.innerHTML = i + "%";
  }, i * 40);
}

for (let i = 0; i <= 100; i++) {
  updatePercentage(i);
}
