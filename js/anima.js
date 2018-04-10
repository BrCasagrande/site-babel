document.addEventListener('scroll', slideRight);

function slideRight(){
  var el = document.getElementsByClassName('animation');
  for(i=0; i<el.length;i++){
  var elementPos = el[i].offsetTop;
  var elementHeight = el[i].clientHeight;
  var topOfWindow = window.scrollY;

  if(topOfWindow > elementPos){
    el[i].classList.add("slideRight");
    el[i].style.opacity = "1";
  } else {
      el[i].classList.remove("slideRight");
      el[i].style.opacity = "0";
    }
  }
}