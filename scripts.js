const myPortfolio={};

//create initial method to kick off the app
myPortfolio.init = function(){
     myPortfolio.arrowEventListener()
     myPortfolio.formEventListener()
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