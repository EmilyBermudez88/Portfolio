const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     AOS.init();
}

//event listeners for each of the project images (to pull up more information)
myPortfolio.projectDivs = document.querySelectorAll('.app');
myPortfolio.projectDivs.forEach((project)=>{
     project.addEventListener('click', (e)=>{
          if(e.target.className==="overlay1") {
               const runningText = document.querySelector('.runningText');
               runningText.classList.remove('hideText');
               myPortfolio.closeProjectEvent(runningText);
          } else if (e.target.className==="overlay2") {
               const restaurantText = document.querySelector('.restaurantText');
               restaurantText.classList.remove('hideText')
               myPortfolio.closeProjectEvent(restaurantText);
          } else if(e.target.className==="overlay4") {
               const gameText = document.querySelector('.gameText');
               gameText.classList.remove('hideText')
               myPortfolio.closeProjectEvent(gameText);
          } else if (e.target.className === "overlay3"){
               const poemText = document.querySelector('.poemText');
               poemText.classList.remove('hideText')
               myPortfolio.closeProjectEvent(poemText);
          };
     })
     project.addEventListener('keypress', (e) => {
          if(e.key === 'Enter'){
               if (e.target.className === "overlay1") {
                    const runningText = document.querySelector('.runningText');
                    runningText.classList.remove('hideText');
                    myPortfolio.closeProjectEvent(runningText);
               } else if (e.target.className === "overlay2") {
                    const restaurantText = document.querySelector('.restaurantText');
                    restaurantText.classList.remove('hideText')
                    myPortfolio.closeProjectEvent(restaurantText);
               } else if (e.target.className === "overlay4") {
                    const gameText = document.querySelector('.gameText');
                    gameText.classList.remove('hideText')
                    myPortfolio.closeProjectEvent(gameText);
               } else if (e.target.className === "overlay3") {
                    const poemText = document.querySelector('.poemText');
                    poemText.classList.remove('hideText')
                    myPortfolio.closeProjectEvent(poemText);
               };
          }
          
     })

})


// Event Listeners to close text on click 
myPortfolio.closeProjectEvent= function(clickedElement){
     const icon = clickedElement.childNodes[11];
     icon.addEventListener('click', (e)=> {
          console.log(e);
          clickedElement.classList.add('hideText');
     })
     icon.addEventListener('keypress', (e)=> {
          if (e.key === 'Enter'){
               clickedElement.classList.add('hideText');
          }
     })
}



myPortfolio.form = document.getElementById("my-form");
async function handleSubmit(event) {
     event.preventDefault();
     const status = document.getElementById("status");
     const data = new FormData(event.target);
     const user = document.getElementById("name").value;
     console.log(user);
     fetch(event.target.action, {
          method: myPortfolio.form.method,
          body: data,
          headers: {
               'Accept': 'application/json'
          }
     }).then(response => {
          if (response.ok) {
               status.innerHTML = `Thanks ${user} for reaching out!`;
               myPortfolio.form.reset();
          } else {
               response.json().then(data => {
                    if(Object.hasOwn(data, 'errors')){
                         status.innerHTML = data['errors'].map(error =>error["message"]).join(", ");
                    } else {
                         status.innerHTML = `Sorry ${user}! There was a problem submitting your inquiry. Please try again.`
                    }
               })
          }
     })
}
myPortfolio.form.addEventListener("submit", handleSubmit)


//call the init method
myPortfolio.init();
