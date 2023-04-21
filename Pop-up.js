const project = [
  {
    projectTitle: 'Tonic',
    imageURL: './icon-images/Snapshoot.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://techcolony.github.io/Portfolio-setup/',
    sourceCode: 'https://github.com/Techcolony/Portfolio-setup',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './icon-images/Snapshoot.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://techcolony.github.io/Portfolio-setup/',
    sourceCode: 'https://github.com/Techcolony/Portfolio-setup',
  },
  {
    projectTitle: 'Tonic',
    imageURL: './icons-images/Snapshoot3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://techcolony.github.io/Portfolio-setup/',
    sourceCode: 'https://github.com/Techcolony/Portfolio-setup',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './icons-images/Snapshoot4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    seeLive: 'https://techcolony.github.io/Portfolio-setup/',
    sourceCode: 'https://github.com/Techcolony/Portfolio-setup',
  },
];

const desktopMenu = () => {
  document.querySelectorAll('.button').forEach((work) => {
    const id = work.getAttribute('id');
    const popupCard = `
      <div class="project" id="project">
            <div class="popupTop">
                <div class="projectPopupTitle">
                  <div class="titlePopup">
                  
                    <h3 class="comp-title">${project[id].projectTitle}</h3>
                    <img
                    id="popupClose${id}"
                    class="popupClose"
                    src="./images/Icon - Cancel.svg"
                    alt="close-btn"
                    />
                  </div>
                  <ul class="work-title">
                        <li class="canopy">CANOPY</li>
                        <li><img src="icons-images/Counter.png" alt="counter" /></li>
                        <li class="role">Back End Dev</li>
                        <li><img src="icons-images/Counter.png" alt="counter" /></li>
                        <li class="role">2015</li>
                    </ul>
                </div>
                <img class="projectImage" src=${project[id].imageURL} alt="project-image">
              <div class="popupDown">
              <div class="project-desc popupDesc">${project[id].description}</div>
                <div class="popupBtns">
                  <ul class="tags">
                    <li class="tag">${project[id].technologies[0]}</li>
                    <li class="tag">${project[id].technologies[1]}</li>
                    <li class="tag">${project[id].technologies[2]}</li>
                    <li class="tag">${project[id].technologies[3]}</li>
                  </ul>
                  <hr>
                  <div class="actionBtnPopup">
                  <a class="btn btnPopup" href=${project[id].seeLive} target='blank'>
                  See Live <img class="seeAll" src='/icons/Iconlive.svg' alt="seeLive"></a>
                  <a class="btn btnPopup" href=${project[id].sourceCode} target='blank'>
                  See Source <img class="seeAll" src='/icons/Groupsource.svg' alt="githubCode"></a>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>`;
      // work.addEventListener('click', () => {
      //   const cardWorks = document.getElementById('cardWorks');
      //   const cards = document.createElement('cards');
      //   cards.innerHTML = popupCard;
      //   cards.classList.add('hide');
      //   cardWorks.appendChild(cards);
      //   cards.classList.add('projectPopup');
      //   if (cards.classList.contains('hide')) { cards.classList.remove('hide'); }
      //   const hidePopup = document.getElementById(`popupClose${id}`);
      //   hidePopup.addEventListener('click', () => {
      //     cardWorks.removeChild(cards);
      //   });
      // });
      // projects.innerHTML = popupCard;
    });
}
document.querySelectorAll('.button').addEventListener('click', desktopMenu)