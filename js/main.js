
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

  input[0].addEventListener('click', function(e) {
    this.className = null;
  })
  input[1].addEventListener('click', function(e) {
    this.className = null;
  })

});
