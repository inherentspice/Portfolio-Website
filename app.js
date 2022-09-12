const sections = document.querySelectorAll('.section');
const divButtons = document.querySelectorAll('.controls');
const buttons = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransition() {
  // Button click changes active class
  for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
      console.log(this);
    })
  }
}

PageTransition();
