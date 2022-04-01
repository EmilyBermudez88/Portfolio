const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     AOS.init();
}

//for portfolio section- when overlay on event listener 'focus' - then have the div with the information appear - when not in focus, it disappears again
     //change width of that app to 100% (and shrink the one beside it?)
     //add display to the information attributed to that section
          //inside of the pop up, we can now get rid of the image, and just keep title, languages, description and links 


//event listeners for each of the project images (to pull up more information)
myPortfolio.projectDivs = document.querySelectorAll('.app');
myPortfolio.projectDivs.forEach(function(project){
     project.addEventListener('click', function(e){
          //textContainer here is a display:none property
          //inside each IF, can we call a function that deals with all of the stuff below- can we pass it 2 arguments: runningApp and runningText? 
          if(e.target.className==="overlay1") {
               const runningText = document.querySelector('.runningText');
               const runningApp = document.querySelector('.runningApp');
               //below will also need to be added in to the remove event as well!
               runningApp.style.width="100%";
               runningApp.style.transition="1s";
               runningText.classList.remove('textContainer');
               myPortfolio.closeProjectEvent(runningText);
          }
          // } else if (e.target.className==="overlay2") {
          //      const restaurantText = document.querySelector('.restaurantText');
          //      restaurantText.classList.remove('textContainer');
          //      restaurantText.classList.add('appPopUp');
          //      myPortfolio.closeProjectEvent(restaurantText);
          // } else if(e.target.className==="overlay4") {
          //      const colorText = document.querySelector('.colorText');
          //      colorText.classList.remove('textContainer');
          //      colorText.classList.add('appPopUp');
          //      myPortfolio.closeProjectEvent(colorText);
          // } else {
          //      const blankText = document.querySelector('.blankText');
          //      blankText.classList.remove('textContainer');
          //      blankText.classList.add('appPopUp');
          //      myPortfolio.closeProjectEvent(blankText);
          // };
          // const projectOverlay = document.querySelectorAll('.app div');
          // projectOverlay.forEach(function (div) {
          //      div.style.backgroundColor = "rgba(50,50,50,0.8)"
          // })
     })
})

//close function doesn't work now because of changing layout- so needed to change popUpContainer i to textContainer i
myPortfolio.closeProjectEvent = function (clickedElement) {
     console.log(clickedElement);
     const closeProject = document.querySelector(`.fa-xmark`)
     console.log(closeProject);
     closeProject.addEventListener('click', function(){
          console.log("goodbye");
          clickedElement.classList.remove('addPopUp');
          clickedElement.classList.add('textContainer');
     })
     closeProject.addEventListener('keypress', function(e){
          console.log(e.key);
          if(e.key === 'Enter'){
          clickedElement.classList.remove('addPopUp');
          clickedElement.classList.add('textContainer');
          }
     })
}    



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



  // //event listener for tabbing:
     // project.addEventListener('keypress', function (e) {
     //      console.log(e.key);
     //      if (e.target.className === "overlay1") {
     //           const runningText = document.querySelector('.runningText');
     //           runningText.classList.remove('textContainer');
     //           runningText.classList.add('appPopUp');
     //           myPortfolio.closeProjectEvent(runningText);
     //      } else if (e.target.className === "overlay2") {
     //           const restaurantText = document.querySelector('.restaurantText');
     //           restaurantText.classList.remove('textContainer');
     //           restaurantText.classList.add('appPopUp');
     //           myPortfolio.closeProjectEvent(restaurantText);
     //      } else if (e.target.className === "overlay4") {
     //           const colorText = document.querySelector('.colorText');
     //           colorText.classList.remove('textContainer');
     //           colorText.classList.add('appPopUp');
     //           myPortfolio.closeProjectEvent(colorText);
     //      } else {
     //           const blankText = document.querySelector('.blankText');
     //           blankText.classList.remove('textContainer');
     //           blankText.classList.add('appPopUp');
     //           myPortfolio.closeProjectEvent(blankText);
     //      };
     //      const projectOverlay = document.querySelectorAll('.app div');
     //      projectOverlay.forEach(function (div) {
     //           div.style.backgroundColor = "rgba(50,50,50,0.8)"
     //      })
     // })