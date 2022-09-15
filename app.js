// let require;
// const { toggle } = require();{

// function dropFunction() {
//    document.getElementById('drop-content').classList.toggle('show');
// }
// dropFunction();

// toggle.addEventListener('click', () => {
//   toggle.classList.dropFunction();
// })
// }

const workSection = document.getElementById("portfolio");

const htmlArray = [
  {
    card_name: "card1",
    card_inner_name: "card11",
    mwork_img: "./images/Works1.png",
    dwork_img: "./images/desk1.svg",
    tonic_div: "Tonic",
    tonic_h1: "Tonic",
    tonic_h10: "Tonic",
    canopy_div: "canopy-cont",
    canopy0_h2: "CANOPY",
    canopyd_h2: "CANOPY",
    work_list: "Back End Dev", 
    work_list2: "2015",
    tonic_h2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tonic_h21: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    buttons_ul: "buttons",
    button_html: "html",
    button_css: "css",
    button_javascript: "javaScript",
    see_button: "See Project",
    

  },
  {
    card_name: "card2",
    card_inner_name: "card22",
    mwork_img: "./images/Works2.png",
    dwork_img: "./images/desk2.svg",
    tonic_div: "Tonic2",
    tonic_h1: "Multi-Post Stories",
    tonic_h10: "Multi-Post Stories",
    canopy_div: "canopy-cont",
    canopy0_h2: "CANOPY",
    canopyd_h2: "FACEBOOK",
    work_list: "Back End Dev", 
    work_list2: "2015",
    tonic_h2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tonic_h21: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    buttons_ul: "buttons",
    button_html: "html",
    button_css: "css",
    button_javascript: "javaScript",
    see_button: "See Project",
  },
  {
    card_name: "card3",
    card_inner_name: "card44",
    mwork_img: "./images/Works3.png",
    dwork_img: "./images/desk3.svg",
    tonic_div: "Tonic",
    tonic_h1: "Multi-Post Stories",
    tonic_h10: "Facebook 360",
    canopy_div: "canopy-cont",
    canopy0_h2: "CANOPY",
    canopyd_h2: "CANOPY",
    work_list: "Back End Dev", 
    work_list2: "2015",
    tonic_h2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tonic_h21: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    buttons_ul: "buttons",
    button_html: "html",
    button_css: "css",
    button_javascript: "javaScript",
    see_button: "See Project",

  },
  {
    card_name: "card4",
    card_inner_name: "card44",
    mwork_img: "./images/Works4.png",
    dwork_img: "./images/desk4.svg",
    tonic_div: "Tonic2",
    tonic_h1: "Multi-Post Stories",
    tonic_h10: "Uber Navigation",
    canopy_div: "canopy-cont",
    canopy0_h2: "CANOPY",
    canopyd_h2: "CANOPY",
    work_list: "Back End Dev", 
    work_list2: "2015",
    tonic_h2: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tonic_h21: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    buttons_ul: "buttons",
    button_html: "html",
    button_css: "css",
    button_javascript: "javaScript",
    see_button: "See Project",
  }
]

// let html_inside = ""

htmlArray.forEach((e) => {
  workSection.innerHTML += `
  <div class="${e.card_name}">
    <div class="${e.card_inner_name}">
      <img class="mwork" src="${e.mwork_img}" alt="Snapshoot Portfolio-1">
      <img class="dwork" src="${e.dwork_img}" alt="Snapshoot Portfolio-1">
        <div class="${e.tonic_div}">
          <h1 class="Multi-Post-Stories2">${e.tonic_h1}</h1>
          <h1 class="Multi-Post-Stories1">${e.tonic_h10}</h1>
            <div class="${e.canopy_div}">
              <h2 class="canopy0">${e.canopy0_h2}</h2>
                <h2 class="canopyd">${e.canopyd_h2}</h2>
                  <ul class="canopy-li">
                    <li>${e.work_list}</li>
                    <li>${e.work_list2}</li>
                  </ul>
            </div>
              <h2 class="tonic-des0">${e.tonic_h2}</h2>
              <h2 class="tonic-des01">${e.tonic_h21}</h2>
                <ul class="${e.buttons_ul}">
                  <li class="html-button">${e.button_html}</li>
                  <li class="css-button">${e.button_css}</li>
                  <li class="js-button">${e.button_javascript}</li>
                </ul>
                  <button class="see-project-sign">${e.see_button}</button>   
        </div>
    </div>
  </div>

  `
})

