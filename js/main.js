// When the user presses the .submit button, add an .error class to both input elements
// When the user puts their cursor in one of the input fields, remove the .error class

document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('.signin');
  var modalWindow = document.querySelector('.modal');
  signIn.addEventListener('click', function(e){
    modalWindow.style.display = 'block';
  });

  var close = document.querySelector('.close');
  close.addEventListener('click', function(e){
    modalWindow.style.display = 'none';
  });

  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');
  submit.addEventListener('click', function(e){
    input[0].className = 'error';
    input[1].className = 'error';

  });

});
