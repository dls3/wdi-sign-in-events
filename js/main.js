var secondLevel =  document.querySelector('#second-level');

  secondLevel.addEventListener('click', function(e) {
    e.stopPropagation();
    window.alert('#second-level received click event!');
  });
