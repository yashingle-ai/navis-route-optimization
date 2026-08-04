// Lightbox for diagrams — click any figure to open it full size.
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var img = lb.querySelector('img');
  var closeBtn = lb.querySelector('.lb-close');
  var lastFocus = null;

  function open(src, alt) {
    lastFocus = document.activeElement;
    img.src = src;
    img.alt = alt || '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lb.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.zoom').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var inner = btn.querySelector('img');
      open(btn.dataset.src, inner ? inner.alt : '');
    });
  });

  lb.addEventListener('click', function (e) {
    // click anywhere except the image itself closes
    if (e.target !== img) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hidden) close();
  });
})();

// Highlight the section currently in view in the nav.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    var sec = document.getElementById(id);
    if (sec) map[id] = a;
  });

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.style.color = ''; });
      var active = map[en.target.id];
      if (active) active.style.color = 'var(--ink)';
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  Object.keys(map).forEach(function (id) {
    obs.observe(document.getElementById(id));
  });
})();
