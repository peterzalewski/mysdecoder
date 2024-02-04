function determinePercentileFromLotteryNumber(event) {
  event.preventDefault();

  const input = document.getElementById("myschools-lottery-number").value;
  if (!/^[-a-f0-9]{2,32}/i.test(input)) {
    output.textContent = "Not a valid lottery number.";
    return;
  }
  const firstByte = parseInt(input.slice(0, 2), 16);

  if (isNaN(firstByte)) {
    output.textContent = "Not a valid lottery number.";
    return;
  }

  const percentile = (((firstByte + 1) / 256) * 100).toFixed(2);
  output.textContent = `${percentile}% of parents have a better score.`;
}

const form = document.getElementById("decoder-form");
const output = document.getElementById("decoded-percentile");
form.addEventListener("submit", determinePercentileFromLotteryNumber);
