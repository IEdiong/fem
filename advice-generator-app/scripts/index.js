const url = 'https://api.adviceslip.com/advice';

document.getElementById('dice').addEventListener('click', () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('quote').textContent = `"${data.slip.advice}"`;
      document.getElementById('quote-author').textContent = data.slip.id;
    });
});

window.addEventListener('load', () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('quote').textContent = `"${data.slip.advice}"`;
      document.getElementById('quote-author').textContent = data.slip.id;
    });
});
