const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('active');
});

document.addEventListener('click', function() {
  // If user clicks outside the dropdown, close it
  dropdown.classList.remove('active');
});

// Also stop clicks on the dropdown-content itself from closing
document.querySelector('.dropdown-content').addEventListener('click', function(e) {
  e.stopPropagation();
});
