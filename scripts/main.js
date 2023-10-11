



window.addEventListener("scroll", function(){
  let show2 = document.querySelector('.text');
  show2.style.opacity = '1';
  this.setTimeout= "5s";
  
})

window.addEventListener('scroll', function(){
  console.log('yes im scrolling')
  let showMe = document.querySelector('.fadein');
  this.setTimeout= "10s";
  showMe.style.opacity = '1';
})

window.addEventListener("scroll", function(){
  let show3 = document.querySelector('.fade');
  this.setTimeout= "15s";
  show3.style.opacity = '1';
})

window.addEventListener("scroll", function(){
  let show4 = document.querySelector('.fadeout');
  this.setTimeout= "20s";
  show4.style.opacity = '1';

})