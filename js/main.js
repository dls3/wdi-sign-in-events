
document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('.signin');
  var closeButton = document.querySelector('.close');
  var modalWindow = document.querySelector('.modal');

  signIn.addEventListener('click', function(e){
    modalWindow.style.display = 'block';
  });

});
