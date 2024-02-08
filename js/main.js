document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.querySelector('.main-restaurant__more');
    let itemsList = document.querySelector('.main-restaurant__list');
    let restaurants = itemsList.querySelectorAll('.main-restaurant__item')
    
    restaurants.forEach(function(elem, key){
      if (key > 1) {
        elem.classList.add('main-restaurant__item--hidden');
        elem.classList.remove('main-restaurant__item--show');
        // elem.style.opacity = 0;
      } else {
        elem.classList.add('main-restaurant__item--show');
        // elem.style.opacity = 1;
      }
    })
    
    toggleButton.addEventListener('click', function () {
      itemsList.classList.toggle('main-restaurant__list--expand');
      restaurants.forEach(function(elem, key){
        if (key > 1) {
          console.log(elem.style.opacity);
          elem.classList.toggle('main-restaurant__item--hidden');
          elem.classList.toggle('main-restaurant__item--show');
          // elem.style.opacity = 1;
        } 
      })
    });
  });