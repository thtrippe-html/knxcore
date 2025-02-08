// script.js

// Dropdown Menu Functionality
document.querySelectorAll('nav ul li').forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'block';
  });

  menuItem.addEventListener('mouseout', () => {
    const dropdown = menuItem.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'none';
  });
});

// Smooth Scroll to Section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Button Hover Effect
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#005f63'; // Darker hover color
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#00c7cc'; // Original color
  });
});

// Video Play/Pause Toggle
const video = document.querySelector('.intro-video');
if (video) {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
