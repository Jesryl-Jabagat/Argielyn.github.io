
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((section) => {
      const link = document.querySelector(`.links-container a[href="#${section.id}"]`);
      
      // Check if the section is in the viewport
      link.classList.toggle(
        "active", 
        window.scrollY >= section.offsetTop - 50 && 
        window.scrollY < section.offsetTop + section.offsetHeight
      );
    });
  });
  
  function openLogin(){
    document.querySelector('.login-container').style.visibility = 'visible';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  function openSignup(){
    document.querySelector('.signup-container').style.visibility = 'visible';
    document.querySelector('.login-container').style.visibility = 'hidden';
    
  }
  function close() {
    document.querySelector('.login-container').style.visibility = 'hidden';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  
  // Adding the event listener to call the close function when #close-btn is clicked
  document.querySelector('#close-btn').addEventListener('click', close);
  document.querySelector('#close-btn1').addEventListener('click', close);

  // Adding the event listener to custom-signup-btn to open function openSignup()
  document.querySelector('.custom-signup-btn').addEventListener('click', openSignup);

  
// Adding the event listener to custom-signup-btn to open function openSignup()


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault();  
  openLogin();
});

document.getElementById('signup').addEventListener('click', function(event) {
  event.preventDefault();  
  openSignup();
});





