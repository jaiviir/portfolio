function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Toggle active class for dropdown menu and hamburger icon
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}