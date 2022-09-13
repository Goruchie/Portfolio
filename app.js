const { toggle } = require('cli-spinners');

function dropFunction() {
  document.getElementById('drop-content').classList.toggle('show');
}
dropFunction();
toggle.addEventListener('click', () => {
  toggle.classList.dropFunction();
});