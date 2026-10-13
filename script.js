(function () {
  document.documentElement.classList.add('js');
  var nav = document.getElementById('nav'), btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 10); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  function setMenu(o) { menu.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      btn.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setMenu(false);
  }, { passive: true });
  document.getElementById('yr').textContent = new Date().getFullYear();

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .15 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  var copy = document.getElementById('copy'), status = document.getElementById('copy-status');
  var email = 'carmichaelwebstudios@gmail.com';
  function fallbackCopy(value) {
    var field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    var copied;
    try { copied = document.execCommand('copy'); }
    finally { field.remove(); }
    if (!copied) throw new Error('Clipboard copy is unavailable.');
  }
  async function copyEmailAddress(value) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return;
      } catch (error) {
        fallbackCopy(value);
        return;
      }
    }
    fallbackCopy(value);
  }
  copy.addEventListener('click', function () {
    copyEmailAddress(email).then(function () {
      status.textContent = 'Email address copied.';
    }).catch(function () {
      status.textContent = 'Unable to copy. You can copy this address manually: ' + email;
    });
  });
})();
