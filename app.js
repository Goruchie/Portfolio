const btn = document.querySelector('#menu');

function opnMenu() {
  document.querySelector('.drop-content').style.display = 'block';
}

btn.addEventListener('click', opnMenu);

const closeBtn = document.querySelector('.cls-btn');

function clsMenu() {
  document.querySelector('.drop-content').style.display = 'none';
}

closeBtn.addEventListener('click', clsMenu);

const closeBtn1 = document.querySelector('.drop-content');

closeBtn1.addEventListener('click', clsMenu);

const workSection = document.getElementById('portfolio');

const htmlArray = [
  {
    img: './images/desk1.svg',
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    img: './images/desk2.svg',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    img: './images/desk3.svg',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    img: './images/desk4.svg',
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];

htmlArray.forEach((e) => {
  workSection.innerHTML += `
  <div class="card" style="width: 18rem;">
    <img src="${e.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.name}</h5>
    <p class="card-text">${e.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
});

const popupWindow = document.getElementById('popupWindow');

/* eslint-disable no-unused-vars */

const clickPopup = (seeButton) => {
  const modals = htmlArray.filter((e) => e.seeButton === seeButton);
  popupWindow.style.display = 'block';

  popupWindow.innerHTML = `
    
    `;
};

/* eslint-disable no-unused-vars */

const clsPopup = () => {
  popupWindow.style.display = 'none';
};

const form = document.getElementById('form-id');
const email = document.getElementById('email-id');
const eMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    eMessage.textContent = '';
  } else {
    e.preventDefault();
    eMessage.textContent = 'The email must be in lowercase';
    eMessage.style.display = 'block';
  }
});

// local storage starts

const inputName = document.getElementById('input-name');
const inputText = document.getElementById('ta-id');

form.addEventListener('input', () => {
  const valuesObj = {
    nameValue: inputName.value,
    emailValue: email.value,
    textAreaValue: inputText.value,
  };
  localStorage.setItem('userFormDataCollected', JSON.stringify(valuesObj));
});

let getData = localStorage.getItem('userFormDataCollected');
getData = JSON.parse(getData);

if (getData != null) {
  inputName.value = getData.nameValue;
  email.value = getData.emailValue;
  inputText.value = getData.textAreaValue;
}