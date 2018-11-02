
let pageHeader = document.querySelector('.header');
window.addEventListener('scroll', e => {
  if (window.scrollY >= 50) {
    pageHeader.classList.add('compact-mode');
  } else {
    pageHeader.classList.remove('compact-mode');
  }
});
let scrollTopButton = document.querySelector('.scroll-top-button');
window.addEventListener('scroll', e => {
  if (window.scrollY >= 2000) {
    scrollTopButton.classList.add('is-visible');
  } else {
    scrollTopButton.classList.remove('is-visible');
  }
});
scrollTopButton.addEventListener('click', e => {
  var cosParameter = window.scrollY / 2,
    scrollCount = 0,
    oldTimestamp = performance.now(),
    scrollDuration = 400;
  function step (newTimestamp) {
    scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
    if (window.scrollY === 0) return;
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
});
