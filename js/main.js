document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.querySelector('.main-restaurant__more');
    let toggleButtonIcon = document.querySelector('.main-restaurant__more-icon');
    let toggleButtonTxt = document.querySelector('.main-restaurant__more-txt');
    let itemsList = document.querySelector('.main-restaurant__list');
    let restaurants = itemsList.querySelectorAll('.main-restaurant__item')
    
    restaurants.forEach(function(elem, key){
      if (key > 1) {
        elem.classList.remove('main-restaurant__item--show');
      } else {
        elem.classList.add('main-restaurant__item--show');
      }
    })
    
    toggleButton.addEventListener('click', function () {
      toggleButtonIcon.classList.toggle('main-restaurant__more-icon--pressed');  
      toggleButtonTxt.textContent = toggleButtonIcon.classList.contains('main-restaurant__more-icon--pressed') ?
        'See Less' :
        'See More';
      
      itemsList.classList.toggle('main-restaurant__list--expand');
      restaurants.forEach(function(elem, key){
        if (key > 1) {
          console.log(elem.style.opacity);
          elem.classList.toggle('main-restaurant__item--show');
        } 
      })
    });
  });