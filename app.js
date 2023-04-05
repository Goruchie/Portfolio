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
    img: './images/coin-tab.png',
    name: 'Coin Tab',
    company: 'MICROVERSE',
    modality: 'REMOTE',
    highlight: '2022',
    description: 'CoinTab is a mobile web application that displays a list of metrics (crypto statistics) created with React and Redux.',
    frame1: 'React',
    frame2: 'CSS',
    frame3: 'Redux',
    frame4: 'Netlify',
    frame5: 'Lint',
    frame6: 'JavaScript',
    seeButton: '1',
    live_version: 'https://elegant-semifreddo-b270b5.netlify.app',
    source: 'https://github.com/Goruchie/CoinTab',
  },
  {
    img: './images/apex.png',
    name: 'Apex Legends Webinar',
    company: 'MICROVERSE',
    modality: 'REMOTE',
    highlight: '2022',
    description: 'Is a web page based on a fictional webinar in which you will learn all about the Apex Legends from the best players.',
    frame1: 'HTML',
    frame2: 'CSS',
    frame3: 'JavaScript',
    frame4: 'Github',
    frame5: 'Git',
    frame6: 'Linux',
    seeButton: '2',
    live_version: 'https://goruchie.github.io/Apex-Legends-Webinar/',
    source: 'https://github.com/Goruchie/Apex-Legends-Webinar',
  },
  {
    img: './images/world.png',
    name: 'World carts',
    company: 'MICROVERSE',
    modality: 'REMOTE',
    highlight: '2023',
    description: 'Is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.',
    frame1: 'Ruby on Rails',
    frame2: 'CSS',
    frame3: 'SQL',
    frame4: 'Render',
    frame5: 'WSL',
    frame6: 'Ruby',
    seeButton: '3',
    live_version: 'https://world-carts.onrender.com',
    source: 'https://github.com/Goruchie/World-carts',
  },
  {
    img: './images/space.png',
    name: 'Space Travellers',
    company: 'MICROVERSE',
    modality: 'REMOTE',
    highlight: '2022',
    description: 'Is a fictional web page for a company that provides commercial and scientific space travel services.',
    frame1: 'React',
    frame2: 'CSS',
    frame3: 'Redux',
    frame4: 'Netlify',
    frame5: 'Lint',
    frame6: 'JavaScript',
    seeButton: '4',
    live_version: 'https://spacetrvlrs-marcos-matt.netlify.app',
    source: 'https://github.com/Goruchie/space-travellers-hub',
  },
  {
    img: './images/poke.png',
    name: 'Poke API',
    company: 'MICROVERSE',
    modality: 'REMOTE',
    highlight: '2022',
    description: 'Poke API Webapp displays Pokemons stats from an API service. The users can share their opinions through likes and comments via the Involvement-API service.',
    frame1: 'HTML',
    frame2: 'CSS',
    frame3: 'JavaScript',
    frame4: 'Github',
    frame5: 'Git',
    frame6: 'Linux',
    seeButton: '5',
    live_version: 'https://j2zromero.github.io/Consuming-anime-API/dist/',
    source: 'https://github.com/Goruchie/Poke-API',
  },
];

htmlArray.forEach((e) => {
  workSection.innerHTML += `
  <div class="card card-manual">
  <div class="image-manual">
    <img src="${e.img}" class="card-img-top card-img" alt="...">
    </div>
    <div class="card-body card-desc">
      <p class="card-title" style="font-size: 2rem">${e.name}</p>
      <ul class="specs">
        <h1 class="text-dark company">${e.company}</h1>
        <li class="text-secondary modality">${e.modality}</li>
        <li class="text-secondary highlight">${e.highlight}</li>
      </ul>
      <p class="card-text">${e.description}</p>
      <ul class="specs2">
        <li class="frame-btn">${e.frame1}</li>
        <li class="frame-btn">${e.frame2}</li>
        <li class="frame-btn">${e.frame3}</li>
      </ul>
      <button id="${e.seeButton}" onclick=clickPopup(this.id) class="go-somewhere">See Project</button>
    </div>
  </div>`;
});

const popupWindow = document.getElementById('popupWindow');

/* eslint-disable no-unused-vars */

const clickPopup = (seeButton) => {
  const modals = htmlArray.filter((e) => e.seeButton === seeButton);
  popupWindow.style.display = 'block';

  popupWindow.innerHTML = `
  <div class="modal-fixed">
  <div class="popup-div modal-cont">     
      <div class="card-body card-desc modal-desc">
        <p class="card-title" style="font-size: 2rem">${modals[0].name}</p>
        <img onclick="clsPopup()" src="./images/Icon2.png" alt="" class="popupClose closePop">
        <ul class="specs">
          <h1 class="text-dark company">${modals[0].company}</h1>
          <li class="text-secondary modality">${modals[0].modality}</li>
          <li class="text-secondary highlight">${modals[0].highlight}</li>
        </ul>
        <img src="${modals[0].img}" class="card-img-top modal-image" alt="...">
        <div class="modal-desc-cont">        
          <p class="card-text modal-text">${modals[0].description}</p>
            <div class="modal-frames">
              <ul class="specs2">
                <li class="frame-btn">${modals[0].frame1}</li>
                <li class="frame-btn">${modals[0].frame2}</li>
                <li class="frame-btn">${modals[0].frame3}</li>
                <li class="frame-btn">${modals[0].frame4}</li>
                <li class="frame-btn">${modals[0].frame5}</li>
                <li class="frame-btn">${modals[0].frame6}</li>                  
              </ul>
              <hr class="solid">
              <div class="see-live-cont">
                <a href="${modals[0].live_version}" target="_blank" class="see-live">See live
                  <img class="live-img" src="./images/live.png" alt="live-icon">
                </a>
                <a href="${modals[0].source}" target="_blank" class="see-live">See Source
                  <img class="source-img" src="./images/source.png" alt="source-icon"> 
                </a>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
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