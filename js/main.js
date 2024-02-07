document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var itemsContainer = document.querySelector('.items-container');
  
    toggleButton.addEventListener('click', function () {
      itemsContainer.classList.toggle('expanded');
    });
  });