document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav drawer
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');
  var closeBtn = document.querySelector('.close-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', function () {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Projects page filtering
  var pills = document.querySelectorAll('.filter-pill');
  var cards = document.querySelectorAll('.project-card');
  if (pills.length && cards.length) {
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        var filter = pill.getAttribute('data-filter');
        cards.forEach(function (card) {
          var cat = card.getAttribute('data-category');
          if (filter === 'all' || filter === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

})