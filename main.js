var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}

const trig1 = document.getElementById('ans-trigger-1');
const trig2 = document.getElementById('ans-trigger-2');
const trig3 = document.getElementById('ans-trigger-3');
const ans1 = document.getElementById('ans-1');
const ans2 = document.getElementById('ans-2');
const ans3 = document.getElementById('ans-3');

trig1.addEventListener('click',()=>{
  ans1.classList.toggle('show-ans');
});
trig2.addEventListener('click',()=>{
  ans2.classList.toggle('remove-ans-2');
});
trig3.addEventListener('click',()=>{
  ans3.classList.toggle('show-ans');
});

const navbar = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');

navOpen.addEventListener('click',()=>{
  navOpen.classList.toggle('bx-x');
  navbar.classList.toggle('show-nav');
});


// ANIMATIONS 

TweenMax.from('.title_logo',1.3,{
delay:.8,
opacity:0,
left:'-100%',
ease:Ease.easeOut,
});

TweenMax.from('.h2',1.3,{
delay:.8,
opacity:0,
left:'-100%',
ease:Ease.easeOut,
});

TweenMax.from('.para',1,{
delay:2,
opacity:0,
top:'-100%',
ease:Ease.easeOut,
});

TweenMax.from('.nav',1,{
delay:.5,
opacity:0,
ease:Ease.easeOut,
});