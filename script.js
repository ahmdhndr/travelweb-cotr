let loader = document.querySelector('.overlay');
let topSection = document.querySelector('.top-section');
let contentSection = document.querySelector('.content');
let footerSection = document.querySelector('.footer');
let body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const navs = document.querySelector('.navs');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navs.classList.add('open');
    body.style.overflowY = 'hidden';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navs.classList.remove('open');
    body.style.overflowY = 'scroll';
    menuOpen = false;
  }
});

loaderOnLoad = () => {
  setTimeout(() => {
    loader.style.transform = 'scale(0)';
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';
    }, 100);

    topSection.style.display = 'block';
    contentSection.style.display = 'block';
    footerSection.style.display = 'block';
    setTimeout(() => {
      topSection.style.opacity = 1;
      contentSection.style.opacity = 1;
      footerSection.style.opacity = 1;
    }, 50);
  }, 1500);
};

// GSAP
let controller = new ScrollMagic.Controller();
let tlOnScroll = new TimelineMax();
let tlOnLoad = new TimelineMax();

tlOnLoad
  .fromTo('.logo', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1.6 })
  .fromTo('.nav-link', { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.25 })
  .fromTo('.book', { opacity: 0, y: -10 }, { opacity: 1, y: 0 }, '-=0.3')
  .fromTo('.hero', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.25 }, '-=0.8')
  .fromTo('.base', { opacity: 0 }, { opacity: 1 }, '-=0.8')
  .fromTo('.man', { opacity: 0 }, { opacity: 1 }, '-=0.7')
  .fromTo('.car', { opacity: 0 }, { opacity: 1 }, '-=0.6')
  .fromTo('.left-flower', { opacity: 0 }, { opacity: 1 }, '-=0.5')
  .fromTo('.featured-post', { opacity: 0 }, { opacity: 1, duration: 2, stagger: 0.7 });

tlOnScroll
  .to('.left-flower', 6, { scale: 1.1 })
  .to('.right-flower', 5, { scale: 1.1 }, '-=5')
  .to('.man', 5, { y: -20, scale: 1.1 }, '-=5')
  .to('.car', 5, { transform: 'scale(1) translate(0, 0)' }, '-=5')
  .to('.base', 5, { y: 30, transform: 'scale(1.1)' }, '-=5')
  .to('.content', 5, { top: '0px' }, '-=5');

let scene = new ScrollMagic.Scene({
  triggerElement: '.topSection',
  duration: '100%',
  triggerHook: 0,
})
  .setTween(tlOnScroll)
  .addTo(controller);

loaderOnLoad();
