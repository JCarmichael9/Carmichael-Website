(function () {
  var btn = document.querySelector('.menu-btn'), menu = document.getElementById('menu');
  function setMenu(open) { menu.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); btn.focus(); } });
  document.getElementById('yr').textContent = new Date().getFullYear();
  var copy = document.getElementById('copy'), status = document.getElementById('copy-status');
  copy.addEventListener('click', function () {
    var email = document.getElementById('mail').href.replace('mailto:', '').split('?')[0];
    var done = function (m) { status.textContent = m; };
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(function () { done('Email address copied.'); }, function () { done('Copy failed. Email: ' + email); });
    else done('Email: ' + email);
  });
})();
