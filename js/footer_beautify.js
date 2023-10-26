setInterval(() => {
  const currentHour = new Date().getHours();
  if (currentHour >= 8 && currentHour < 18) {
    currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/L小屋-勤奋工作中-6adea8?style=social&logo=unity' title='什么时候能够财富自由啊~'><div id='runtime'>" + '</div>';
  }
  else {
    currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/L小屋-营业中-6adea8?style=social&logo=unity' title='下班了就该开开心心地玩耍~'><div id='runtime'>" + '</div>';
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);