
document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('.signin');
  var modalWindow = document.querySelector('.modal');
  var close = document.querySelector('.close');

  signIn.addEventListener('click', function(e){
    modalWindow.style.display = 'block';
  });

  close.addEventListener('click', function(e){
    modalWindow.style.display = 'none';
  });

});
