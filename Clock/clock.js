const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function step() {
  var now = new Date()

  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()

  if (hours > 12) {
    hours -= 12
  }

  var secondsDeg = seconds / 60 * 360
  var minutesDeg = (minutes * 60 + seconds) / 3600 * 360
  var hoursDeg = (hours * 3600 + minutes * 60 + seconds) / (12 * 3600) * 360

  if (secondsDeg === 90) {
    secondHand.style.transition = 'all 0s';
  }

  hourHand.style.transform = `rotate(${-90 + hoursDeg}deg)`;
  minHand.style.transform = `rotate(${-90 + minutesDeg}deg)`;
  secondHand.style.transform = `rotate(${-90 + secondsDeg}deg)`;
}

step()
setInterval(function () {
  step()
}, 1000)
