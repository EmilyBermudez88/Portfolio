const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     // myPortfolio.arrowEventListener();
     // myPortfolio.formEventListener();
     AOS.init();
}

//for portfolio section- when overlay on event listener 'focus' - then have the div with the information appear - when not in focus, it disappears again
     //change width of that app to 100% (and shrink the one beside it?)
     //add display to the information attributed to that section
          //inside of the pop up, we can now get rid of the image, and just keep title, languages, description and links 

//also need to connect form to the site ppl used for forms.... 

//event listeners for each of the project images (to pull up more information)
myPortfolio.projectDivs = document.querySelectorAll('.app');
myPortfolio.projectDivs.forEach(function(project){
     project.addEventListener('click', function(e){
          //textContainer here is a display:none property
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
// myPortfolio.form = document.querySelector('form');
// myPortfolio.formEventListener = function(){
//      myPortfolio.form.addEventListener('submit', function(e){
//           e.preventDefault();
//           //assign variable to in puts that user interacts with
//           const nameInput = document.getElementById('name');
//           const emailInput = document.getElementById('email');
//           const messageInput = document.getElementById('message');
//           //assign variables to set what is contained inside the inputs
//           const userName = nameInput.value;
//           const userEmail = emailInput.value;
//           const userMessage = messageInput.value;
//           //clear inputs on click
//           nameInput.value = '';
//           emailInput.value = '';
//           messageInput.value = '';

//           const thankYouMessage = document.querySelector('.contactForm p');
//           thankYouMessage.classList.add("thankYouDisplay")
//           setTimeout(()=> {
//                thankYouMessage.classList.remove("thankYouDisplay")
//           }, 2000);

          

//      })
// }

myPortfolio.form = document.getElementById("my-form");

async function handleSubmit(event) {
     event.preventDefault();
     const status = document.getElementById("status");
     const data = new FormData(event.target);
     // console.log(data);
     fetch(event.target.action, {
          method: myPortfolio.form.method,
          body: data,
          headers: {
               'Accept': 'application/json'
          }
     }).then(response => {
          // console.log(response);
          if (response.ok) {
               status.innerHTML = "Thanks for reaching out!";
               myPortfolio.form.reset();
          } else {
               response.json().then(data => {
                    if(Object.hasOwn(data, 'errors')){
                         status.innerHTML = data['errors'].map(error =>error["message"]).join(", ");
                    } else {
                         status.innerHTML = "Oops! There was a problem submitting your inquiry. Please try again."
                    }
               })
          }
     })
}
myPortfolio.form.addEventListener("submit", handleSubmit)


//call the init method
myPortfolio.init();
