const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     myPortfolio.arrowEventListener();
     myPortfolio.formEventListener();
}

//create event listener to listen for click of down arrow icon
const downArrow = document.getElementById('scrollDown');
myPortfolio.arrowEventListener = function(){
     downArrow.addEventListener('click', function(e){
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          aboutSection.scrollIntoView({behavior:"smooth"});
     })
}

//event listeners for each of the project images (to pull up more information)
myPortfolio.projectDivs = document.querySelectorAll('.app');
myPortfolio.projectDivs.forEach(function(project){
     project.addEventListener('click', function(e){
          const source = 'file:///Users/emilyread/Documents/JUNO/BOOTCAMP/portfolio/emilyReadPortfolio/assets/';
          if(e.target.src == `${source}weatherApp.png`) {
               const runningText = document.querySelector('.runningText');
               runningText.classList.remove('textContainer');
               runningText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(runningText);
          } else if (e.target.src == `${source}restaurantApp.png`) {
               const restaurantText = document.querySelector('.restaurantText');
               restaurantText.classList.remove('textContainer');
               restaurantText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(restaurantText);
          } else if(e.target.src == `${source}colorApp.png`) {
               const colorText = document.querySelector('.colorText');
               colorText.classList.remove('textContainer');
               colorText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(colorText);
          } else {
               const blankText = document.querySelector('.blankText');
               blankText.classList.remove('textContainer');
               blankText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(blankText);
          };
     })
})

myPortfolio.closeProjectEvent = function (clickedElement) {
     const closeProject = document.querySelectorAll('.projectsContainer i')
     closeProject.forEach(function(icon){
          icon.addEventListener('click', function () {
               clickedElement.classList.remove('addPopUp');
               clickedElement.classList.add('textContainer');
          })
     })     
}


//create event listener to listen for form submit
myPortfolio.form = document.querySelector('form');
myPortfolio.formEventListener = function(){
     myPortfolio.form.addEventListener('submit', function(e){
          e.preventDefault();
          //assign variable to in puts that user interacts with
          const nameInput = document.getElementById('name');
          const emailInput = document.getElementById('email');
          const messageInput = document.getElementById('message');
          //assign variables to set what is contained inside the inputs
          const userName = nameInput.value;
          const userEmail = emailInput.value;
          const userMessage = messageInput.value;
          //clear inputs on click
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';

          const thankYouMessage = document.querySelector('.contactForm p');
          thankYouMessage.classList.add("thankYouDisplay")
          setTimeout(()=> {
               thankYouMessage.classList.remove("thankYouDisplay")
          }, 2000);
     })
}

//call the init method
myPortfolio.init();
