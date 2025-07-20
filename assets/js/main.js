/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});


/*===== TYPEWRITE ANIMATION =====*/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

/*===== ONCLICK ANIMATION =====*/
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.education__img');
  let currentActive = null;

// Use 'touchstart' on mobile, 'click' on desktop
  const eventType = 'ontouchstart' in window ? 'touchstart' : 'click';

  items.forEach((el) => {
    // Use touchstart instead of click for mobile reliability
    el.addEventListener('touchstart', function (e) {
      if (window.innerWidth <= 768) {
        e.stopPropagation();

        if (currentActive === this) {
          this.classList.remove('active');
          currentActive = null;
        } else {
          items.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
          currentActive = this;
        }
      }
    });
  });

  // Close when touching anywhere else
  document.addEventListener('touchstart', function () {
    if (window.innerWidth <= 768) {
      items.forEach(el => el.classList.remove('active'));
      currentActive = null;
    }
  });
});


// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var stars = [], // Array that contains the stars
//     FPS = 60, // Frames per second
//     x = 100, // Number of stars
//     mouse = {
//       x: 0,
//       y: 0
//     };  // mouse location

// // Push stars to array

// for (var i = 0; i < x; i++) {
//   stars.push({
//     x: Math.random() * canvas.width,
//     y: Math.random() * canvas.height,
//     radius: Math.random() * 1 + 1,
//     vx: Math.floor(Math.random() * 50) - 25,
//     vy: Math.floor(Math.random() * 50) - 25
//   });
// }

// // Draw the scene

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
  
//   ctx.globalCompositeOperation = "lighter";
  
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     ctx.fillStyle = "#fff";
//     ctx.beginPath();
//     ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillStyle = 'black';
//     ctx.stroke();
//   }
  
//   ctx.beginPath();
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var starI = stars[i];
//     ctx.moveTo(starI.x,starI.y); 
//     if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
//     for (var j = 0, x = stars.length; j < x; j++) {
//       var starII = stars[j];
//       if(distance(starI, starII) < 150) {
//         //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//         ctx.lineTo(starII.x,starII.y); 
//       }
//     }
//   }
//   ctx.lineWidth = 0.05;
//   ctx.strokeStyle = 'white';
//   ctx.stroke();
// }

// function distance( point1, point2 ){
//   var xs = 0;
//   var ys = 0;
 
//   xs = point2.x - point1.x;
//   xs = xs * xs;
 
//   ys = point2.y - point1.y;
//   ys = ys * ys;
 
//   return Math.sqrt( xs + ys );
// }

// // Update star locations

// function update() {
//   for (var i = 0, x = stars.length; i < x; i++) {
//     var s = stars[i];
  
//     s.x += s.vx / FPS;
//     s.y += s.vy / FPS;
    
//     if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//     if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//   }
// }

// canvas.addEventListener('mousemove', function(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// });

// // Update and draw

// function tick() {
//   draw();
//   update();
//   requestAnimationFrame(tick);
// }

// tick();




sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .education__img, .work__img, .contact__input',{interval: 200}); 
