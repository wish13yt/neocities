const canvas = document.getElementById('captcha');
const ctx = canvas.getContext('2d');
const userInput = document.getElementById('user-input');
const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

let captchaText = '';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText = text;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '20px Arial';
  ctx.fillStyle = '#000';
  for (let i = 0; i < captchaText.length; i++) {
    ctx.fillText(captchaText[i], 10 + i * 15, 20);
    ctx.rotate(Math.random() * 0.1 - 0.05);
  }
};

generateCaptcha();

refreshBtn.addEventListener('click', generateCaptcha);

userInput.addEventListener('keyup', () => {
  if (userInput.value === captchaText) {
    message.textContent = '';
    submitBtn.disabled = false;
  } else {
    message.textContent = 'Incorrect CAPTCHA';
    submitBtn.disabled = true;
  }
});
