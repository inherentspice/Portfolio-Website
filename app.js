const sections = document.querySelectorAll('.section');
const divButtons = document.querySelectorAll('.controls');
const buttons = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const portfolioItem = document.querySelectorAll('.portfolio-item');


function PageTransition() {

  let tempImageHolder = '';
  // Button click changes active class
  for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  //Changing the active section
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove active class from other buttons
      buttons.forEach((button) => {
        button.classList.remove('active');
      })
      e.target.classList.add('active');

      //hide other sections from view
      sections.forEach((section) => {
        section.classList.remove('active');
      })

      const element = document.getElementById(id)
      element.classList.add('active');
    }
  })

  for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].addEventListener('mouseover', (e) => {
      let pictureItem = portfolioItem[i].querySelector(".img-display");
      tempImageHolder = pictureItem.src;
      pictureItem.src = `images/${e.target.id}.gif`;
    })

    portfolioItem[i].addEventListener('mouseout', (e) => {
      portfolioItem[i].querySelector(".img-display").src = tempImageHolder;
      tempImageHolder = "";
  })
}

}

PageTransition();
