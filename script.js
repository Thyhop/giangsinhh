function showGreeting() {
  const username = document.getElementById('username').value;
  if (username.trim() === "") {
    alert("Vui lòng nhập tên của bạn!");
    return;
  }

  const greetings = [
    `Chúc ${username} một Giáng sinh ấm áp và tràn đầy hạnh phúc! 🎅`,
    `${username}, mong bạn có một mùa Giáng sinh tuyệt vời! ❄️`,
    `🎄 ${username}, chúc bạn luôn vui vẻ và ngập tràn yêu thương trong dịp Giáng sinh này! 🎁`
  ];

  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  document.getElementById('greeting').textContent = randomGreeting;

  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.remove('hidden');
}

function restart() {
  document.getElementById('username').value = "";
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
}
