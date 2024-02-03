function determinePercentileFromLotteryNumber(event) {
  // TODO: Check input
  const firstByte = parseInt(document.getElementById("myschools-lottery-number").value.slice(0, 2), 16);
  const percentile = ((firstByte + 1) / 256) * 100;
  output.textContent = `${percentile.toFixed(2)}% of parents have a better score.`;
  event.preventDefault();
}

const form = document.getElementById("decoder-form");
const output = document.getElementById("decoded-percentile");
form.addEventListener("submit", determinePercentileFromLotteryNumber);
