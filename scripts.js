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



//portfolio section:
//first is to create a class to setup the basic styling of the pop up (div with width/height, the video container, the text wrapper container)
//in java, on click of pic, call the class to show, and add in innerhtml for text wrapper, and plug in video, and an x icon at top
//make an event listener for an 'x' that when clicked, it removes the class and clears the inner html and video src