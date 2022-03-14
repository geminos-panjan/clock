const animation = () => {
  const date = new Date();

  document.querySelector(".date").textContent = date.toLocaleDateString();
  document.querySelector(".time").textContent = date.toLocaleTimeString();

  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  const degSec = sec * 6;
  const degMin = (min * 60 + sec) / 10;
  const degHour = (hour * 60 + min) / 2;
  document.querySelector(".second").style.transform = `rotate(${degSec}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${degMin}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${degHour}deg)`;
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);
