const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
// toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
  // animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 2}s`
  })
}


navSlide();
