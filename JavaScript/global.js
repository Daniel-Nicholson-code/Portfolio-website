// FUNCTION

//Changes website into or out of dark mode
//IMPORTANT: Depricated
function togglelightMode(){
  document.body.classList.toggle('light-Mode');

  //Stores the selected state in local storage
  if (document.body.classList.contains('light-Mode')){
    localStorage.setItem('theme', 'light-Mode');
  }
  else{
    localStorage.removeItem('theme');
  }
}





// EVENT LISTENER

//Checking if user previously had dark mode on after loading
//IMPORTANT: Depricated
document.addEventListener('DOMContentLoaded', function() {

  if (localStorage.getItem('theme') == 'light-Mode'){
    togglelightMode();
  }

});

