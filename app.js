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
    card_name: 'card1',
    card_inner_name: 'card11',
    mwork_img: './images/Works1.png',
    dwork_img: './images/desk1.svg',
    tonic_div: 'Tonic',
    name: 'Tonic',
    tonic_h10: 'Tonic',
    canopy_div: 'canopy-cont',
    canopy0_h2: 'CANOPY',
    canopyd_h2: 'CANOPY',
    work_list: 'Back End Dev',
    work_list2: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tonic_h21: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: 'buttons',
    tonic_h22: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seeButton: '1',
    live_version: 'https://Goruchie.github.io/Goruchie.github.io/',
    source: 'https://github.com/Goruchie/Goruchie.github.io',

  },
  {
    card_name: 'card2',
    card_inner_name: 'card22',
    mwork_img: './images/Works2.png',
    dwork_img: './images/desk2.svg',
    tonic_div: 'Tonic2',
    name: 'Multi-Post Stories',
    tonic_h10: 'Multi-Post Stories',
    canopy_div: 'canopy-cont',
    canopy0_h2: 'CANOPY',
    canopyd_h2: 'FACEBOOK',
    work_list: 'Back End Dev',
    work_list2: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tonic_h21: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: 'buttons',
    tonic_h22: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seeButton: '2',
    live_version: 'https://Goruchie.github.io/Goruchie.github.io/',
    source: 'https://github.com/Goruchie/Goruchie.github.io',
  },
  {
    card_name: 'card3',
    card_inner_name: 'card44',
    mwork_img: './images/Works3.png',
    dwork_img: './images/desk3.svg',
    tonic_div: 'Tonic',
    name: 'Multi-Post Stories',
    tonic_h10: 'Facebook 360',
    canopy_div: 'canopy-cont',
    canopy0_h2: 'CANOPY',
    canopyd_h2: 'CANOPY',
    work_list: 'Back End Dev',
    work_list2: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tonic_h21: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: 'buttons',
    tonic_h22: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seeButton: '3',
    live_version: 'https://Goruchie.github.io/Goruchie.github.io/',
    source: 'https://github.com/Goruchie/Goruchie.github.io',

  },
  {
    card_name: 'card4',
    card_inner_name: 'card44',
    mwork_img: './images/Works4.png',
    dwork_img: './images/desk4.svg',
    tonic_div: 'Tonic2',
    name: 'Multi-Post Stories',
    tonic_h10: 'Uber Navigation',
    canopy_div: 'canopy-cont',
    canopy0_h2: 'CANOPY',
    canopyd_h2: 'CANOPY',
    work_list: 'Back End Dev',
    work_list2: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tonic_h21: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: 'buttons',
    tonic_h22: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seeButton: '4',
    live_version: 'https://Goruchie.github.io/Goruchie.github.io/',
    source: 'https://github.com/Goruchie/Goruchie.github.io',
  },
];

htmlArray.forEach((e) => {
  workSection.innerHTML += `
  <div class="${e.card_name}">
    <div class="${e.card_inner_name}">
      <img class="mwork" src="${e.mwork_img}" alt="Snapshoot Portfolio-1">
      <img class="dwork" src="${e.dwork_img}" alt="Snapshoot Portfolio-1">
        <div class="${e.tonic_div}">
          <h1 class="Multi-Post-Stories2">${e.name}</h1>
          <h1 class="Multi-Post-Stories1">${e.tonic_h10}</h1>
            <div class="${e.canopy_div}">
              <h2 class="canopy0">${e.canopy0_h2}</h2>
                <h2 class="canopyd">${e.canopyd_h2}</h2>
                  <ul class="canopy-li">
                    <li>${e.work_list}</li>
                    <li>${e.work_list2}</li>
                  </ul>
            </div>
              <h2 class="tonic-des0">${e.description}</h2>
              <h2 class="tonic-des01">${e.tonic_h21}</h2>
                <ul class="${e.technologies}">
                  <li class="html-button">html</li>
                  <li class="css-button">css</li>
                  <li class="js-button">javaScript</li>
                </ul>                
                  <button id="${e.seeButton}" onclick=clickPopup(this.id) class="see-project-sign">See Project</button>
        </div>
    </div>
  </div>`;
});

const popupWindow = document.getElementById('popupWindow');

/* eslint-disable no-unused-vars */

const clickPopup = (seeButton) => {
  const modals = htmlArray.filter((e) => e.seeButton === seeButton);
  popupWindow.style.display = 'block';

  popupWindow.innerHTML = `
    <div class="popup-div">  
      <div class="popup-cont">  
      <h2 class="popup-title">${modals[0].name}</h2>
        <img onclick="clsPopup()" src="./images/Icon2.png" alt="" class="popupClose closePop">
          <div class="pop-canopy-cont">
            <h2 class="canopy0">${modals[0].canopy0_h2}</h2>
              <h2 class="canopyd">${modals[0].canopyd_h2}</h2>
                <ul class="canopy-li-pop">
                  <li>${modals[0].work_list}</li>
                  <li>${modals[0].work_list2}</li>
                </ul>
          </div>
            <img class="mwork" src="${modals[0].mwork_img}" alt="Snapshoot Portfolio-1">
            <img class="dwork1" src="./images/uf.png" alt="Snapshoot Portfolio-1">
              <h2 class="tonic-des0-pop">${modals[0].tonic_h22}</h2>
              <div class="textcont">
                <h2 class="tonic-des01-pop">${modals[0].tonic_h22}</h2>
                <div class="button-container">
                  <ul class="buttons-pop">
                    <li class="html-button">html</li>
                    <li class="css-button">css</li>
                    <li class="js-button">javaScript</li>
                  </ul>
                    <img class="vector4" src="./images/Vector 4.png" alt="vector">
                    <div class="boxes-cont">
                      <div class="live-box">
                        <div class="just-base">
                        <a href="${modals[0].live_version}" target="_blank" class="see-live">See live
                        </a>
                          <img class="live-img" src="./images/live.png" alt="live-icon">                          
                      </div>
                      </div>
                        <div class="source-box">
                        <div class="just-base1">
                          <a href="${modals[0].source}" target="_blank" class="see-source">See Source
                            </a>
                              <img class="source-img" src="./images/source.png" alt="source-icon">                          
                        </div>
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

const fullName = document.getElementById('input-name');
const textArea = document.getElementById('ta-id');

form.addEventListener('input', () => {
  const formInputKeysAndValues = {
    nameValue: fullName.value,
    emailValue: email.value,
    textAreaValue: textArea.value,
  };
  localStorage.setItem('userFormDataCollected', JSON.stringify(formInputKeysAndValues));
});
