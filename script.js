const nav = document.querySelector('#main');
const headone = document.querySelector('h1');
const all = document.querySelectorAll('*:not(html, html > head, html > body)');
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');

let topOfNav = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }
    
    function darked(){
      for (let i = 0; i < all.length; i++) {
        all[i].style.background= 'black';
        all[i].style.color = 'white';
      }
      headone.style.textShadow = '3px 4px 0 rgba(255, 255, 255, 0.5)';
    }
    
    function lighted(){
      for (let i = 0; i < all.length; i++) {
        all[i].style.background = 'white';
        all[i].style.color = 'black';
      }
      headone.style.textShadow = '3px 4px 0 rgba(0, 0, 0, 0.2)';
    }
    
    window.addEventListener('scroll', fixNav);
    dark.addEventListener('click', darked);
    light.addEventListener('click', lighted);
