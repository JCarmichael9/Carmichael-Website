(function () {
  document.documentElement.classList.add('js');
  var nav = document.getElementById('nav'), btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 10); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  function setMenu(o) { menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); } });
  document.getElementById('yr').textContent = new Date().getFullYear();

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .15 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  var copy = document.getElementById('copy'), status = document.getElementById('copy-status');
  copy.addEventListener('click', function () {
    var email = document.getElementById('mail').href.replace('mailto:', '').split('?')[0];
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(function () { status.textContent = 'Email address copied.'; }, function () { status.textContent = 'Copy failed. Email: ' + email; });
    else status.textContent = 'Email: ' + email;
  });
})();
