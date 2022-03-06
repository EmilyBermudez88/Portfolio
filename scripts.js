const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     // myPortfolio.arrowEventListener();
     myPortfolio.formEventListener();
}

// //create event listener to listen for click of down arrow icon
// const downArrow = document.getElementById('scrollDown');
// myPortfolio.arrowEventListener = function(){
//      downArrow.addEventListener('click', function(e){
//           e.preventDefault();
//           const aboutSection = document.getElementById('about');
//           aboutSection.scrollIntoView({behavior:"smooth"});
//      })
// }

//event listeners for each of the project images (to pull up more information)
myPortfolio.projectDivs = document.querySelectorAll('.app');
myPortfolio.projectDivs.forEach(function(project){
     project.addEventListener('click', function(e){

          if(e.target.className==="overlay1") {
               const runningText = document.querySelector('.runningText');
               runningText.classList.remove('textContainer');
               runningText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(runningText);
          } else if (e.target.className==="overlay2") {
               const restaurantText = document.querySelector('.restaurantText');
               restaurantText.classList.remove('textContainer');
               restaurantText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(restaurantText);
          } else if(e.target.className==="overlay4") {
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
          const projectOverlay = document.querySelectorAll('.app div');
          projectOverlay.forEach(function (div) {
               div.style.backgroundColor = "rgba(50,50,50,0.8)"
          })
     })

     //event listener for tabbing:
     project.addEventListener('keypress', function (e) {
          console.log(e.key);
          if (e.target.className === "overlay1") {
               const runningText = document.querySelector('.runningText');
               runningText.classList.remove('textContainer');
               runningText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(runningText);
          } else if (e.target.className === "overlay2") {
               const restaurantText = document.querySelector('.restaurantText');
               restaurantText.classList.remove('textContainer');
               restaurantText.classList.add('appPopUp');
               myPortfolio.closeProjectEvent(restaurantText);
          } else if (e.target.className === "overlay4") {
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
          const projectOverlay = document.querySelectorAll('.app div');
          projectOverlay.forEach(function (div) {
               div.style.backgroundColor = "rgba(50,50,50,0.8)"
          })
     })
})


myPortfolio.closeProjectEvent = function (clickedElement) {
     const closeProject = document.querySelectorAll('.popUpContainer i')
     closeProject.forEach(function(icon){
          icon.addEventListener('click', function () {
               clickedElement.classList.remove('addPopUp');
               clickedElement.classList.add('textContainer');
               const projectOverlay = document.querySelectorAll('.app div');
               projectOverlay.forEach(function (div) {
                    div.style.backgroundColor = "transparent"
               })
          })
          icon.addEventListener('keypress', function (e) {
               console.log(e.key);
               if(e.key === 'Enter'){
               clickedElement.classList.remove('addPopUp');
               clickedElement.classList.add('textContainer');
                    const projectOverlay = document.querySelectorAll('.app div');
                    projectOverlay.forEach(function (div) {
                         div.style.backgroundColor = "transparent"
                    })
               }
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
