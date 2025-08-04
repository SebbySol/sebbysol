// Dropdown menu animation
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen Functionality - Mobile & Tablet Only
  const loadingScreen = document.getElementById('loadingScreen');
  const isMobileOrTablet = window.innerWidth <= 900;
  
  if (loadingScreen && isMobileOrTablet) {
    // Add loading class to body to prevent scrolling
    document.body.classList.add('loading');
    
    // Show loading screen for 5 seconds
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      // Remove loading class and loading screen after fade out
      setTimeout(() => {
        document.body.classList.remove('loading');
        loadingScreen.remove();
      }, 500);
    }, 5000);
  } else if (loadingScreen) {
    // Hide immediately on desktop
    loadingScreen.style.display = 'none';
  }

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

  // Burger menu functionality for tablet
  const burger = document.getElementById('burger');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if (burger && dropdownMenu) {
    burger.addEventListener('change', function() {
      if (this.checked) {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!dropdownMenu.contains(event.target) && event.target !== burger) {
        dropdownMenu.style.display = 'none';
        burger.checked = false;
      }
    });
  }
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

// Click-and-drag horizontal scroll for Figma gallery
const figmaGalleryRow = document.querySelector('.figma-gallery-row');
if (figmaGalleryRow) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  figmaGalleryRow.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    isDragging = false;
    figmaGalleryRow.classList.add('dragging');
    startX = e.pageX - figmaGalleryRow.offsetLeft;
    scrollLeft = figmaGalleryRow.scrollLeft;
  });
  figmaGalleryRow.addEventListener('mouseleave', () => {
    isDown = false;
    isDragging = false;
    figmaGalleryRow.classList.remove('dragging');
  });
  figmaGalleryRow.addEventListener('mouseup', () => {
    isDown = false;
    isDragging = false;
    figmaGalleryRow.classList.remove('dragging');
  });
  figmaGalleryRow.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - figmaGalleryRow.offsetLeft;
    const walk = (x - startX) * 1.2;
    isDragging = true;
    figmaGalleryRow.scrollLeft = scrollLeft - walk;
  });
  // Prevent text selection while dragging
  figmaGalleryRow.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
    isDragging = false;
  }, true);
  // Touch support
  figmaGalleryRow.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false;
    startX = e.touches[0].pageX - figmaGalleryRow.offsetLeft;
    scrollLeft = figmaGalleryRow.scrollLeft;
  });
  figmaGalleryRow.addEventListener('touchend', () => {
    isDown = false;
    isDragging = false;
  });
  figmaGalleryRow.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - figmaGalleryRow.offsetLeft;
    const walk = (x - startX) * 1.2;
    isDragging = true;
    figmaGalleryRow.scrollLeft = scrollLeft - walk;
  });
} 

// Card Modal Popup Logic
function getCardInfo(card) {
  // Try to get info from data attributes, fallback to alt/title
  const img = card.querySelector('img');
  return {
    src: img ? img.src : '',
    title: card.getAttribute('data-title') || (img ? img.alt : ''),
    description: card.getAttribute('data-description') || img?.getAttribute('data-description') || img?.alt || ''
  };
}

function openCardModal(info) {
  document.getElementById('modalImage').src = info.src;
  document.getElementById('modalTitle').textContent = info.title;
  document.getElementById('modalDescription').textContent = info.description;
  document.getElementById('cardModal').classList.add('open');
}

function closeCardModal() {
  document.getElementById('cardModal').classList.remove('open');
  document.getElementById('modalImage').src = '';
  document.getElementById('modalTitle').textContent = '';
  document.getElementById('modalDescription').textContent = '';
}

document.addEventListener('DOMContentLoaded', function() {
  // Attach click event to all gallery and masonry cards
  document.querySelectorAll('.gallery-card, .masonry-item, .figma-gallery-card').forEach(function(card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      // Prevent drag/scroll click
      if (e.target.classList.contains('card-view-btn')) return;
      // Prevent default link behavior if card is an <a>
      if (card.tagName.toLowerCase() === 'a') e.preventDefault();
      e.preventDefault(); // Also prevent for any nested <a>
      const info = getCardInfo(card);
      openCardModal(info);
    });
    // Also handle the 'View' button
    const viewBtn = card.querySelector('.card-view-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const info = getCardInfo(card);
        openCardModal(info);
      });
    }
  });

  // Close modal on close button or background click
  document.getElementById('cardModalClose').onclick = closeCardModal;
  document.getElementById('cardModal').onclick = function(e) {
    if (e.target === this) closeCardModal();
  };
}); 
