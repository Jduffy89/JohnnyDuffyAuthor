const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded','false');
}));
document.querySelectorAll('a.disabled').forEach(a => a.addEventListener('click', e => e.preventDefault()));
document.getElementById('year').textContent = new Date().getFullYear();
