document.addEventListener('scroll', anima);

function anima(){
  var el = document.getElementsByClassName('animation');
  for(i=0; i<el.length;i++){
  var imagePos = el[i].offsetTop;
  var imageHeight = el[i].clientHeight;
  var topOfWindow = window.scrollY;

  console.log(imagePos+(imageHeight*3));
  //console.log(imageHeight);
  console.log(topOfWindow);

  if(topOfWindow > imagePos){
    el[i].classList.add("slideRight");
  } else {
      el[i].classList.remove("slideRight");
    }
  }
}