// Dropdown menu animation
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

document.addEventListener('DOMContentLoaded', function() {
  // For every menu button in the document
  document.querySelectorAll('.simple-nav-menu').forEach(function(menuBtn) {
    var dropdownMenu = menuBtn.parentElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        // Hide all other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
          if (menu !== dropdownMenu) menu.style.display = 'none';
        });
        // Toggle this one
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
      });
      // Hide dropdown when clicking outside
      document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuBtn) {
          dropdownMenu.style.display = 'none';
        }
      });
    }
  });
});

// Placeholder for future animations (e.g., section reveals) 

// Click-and-drag horizontal scroll for Photoshop gallery
const galleryRow = document.querySelector('.photoshop-gallery .gallery-row');
if (galleryRow) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  galleryRow.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    isDragging = false;
    galleryRow.classList.add('dragging');
    startX = e.pageX - galleryRow.offsetLeft;
    scrollLeft = galleryRow.scrollLeft;
  });
  galleryRow.addEventListener('mouseleave', () => {
    isDown = false;
    isDragging = false;
    galleryRow.classList.remove('dragging');
  });
  galleryRow.addEventListener('mouseup', () => {
    isDown = false;
    isDragging = false;
    galleryRow.classList.remove('dragging');
  });
  galleryRow.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - galleryRow.offsetLeft;
    const walk = (x - startX) * 1.2;
    isDragging = true;
    galleryRow.scrollLeft = scrollLeft - walk;
  });
  // Prevent text selection while dragging
  galleryRow.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
    isDragging = false;
  }, true);
  // Touch support
  galleryRow.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.touches[0].pageX - galleryRow.offsetLeft;
    scrollLeft = galleryRow.scrollLeft;
  });
  galleryRow.addEventListener('touchend', () => {
    isDown = false;
    isDragging = false;
  });
  galleryRow.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - galleryRow.offsetLeft;
    const walk = (x - startX) * 1.2;
    isDragging = true;
    galleryRow.scrollLeft = scrollLeft - walk;
  });
} 
