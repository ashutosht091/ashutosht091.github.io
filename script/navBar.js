const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('menuOpen');
    document.querySelector('body').style= 'position : fixed';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('menuOpen');
    document.querySelector('body').style= 'position : unset';
    menuOpen = false;
  }
});


document.querySelector("#see-more-location").addEventListener("click", ()=> {
  document.getElementById("locationPage").classList.add("locationPageShow");
  document.getElementById("locationPage").classList.remove("locationPageHide");
});
document.querySelector("#close-location").addEventListener("click", ()=> {
  document.getElementById("locationPage").classList.add("locationPageHide");
  setTimeout(function(){
    document.getElementById("locationPage").classList.remove("locationPageShow");
  }, 900);

});
