var slidesH = document.getElementsByClassName("slidesHome");
var i = 0;	

slidesH[slidesH.length-1].className += " last";	
setInterval(function(){carousel()},7000);

/* "Carousel" */
function carousel(){  
    if(i >= slidesH.length){ i = 0}    
    for (x = 0; x < slidesH.length; x++) {
          slidesH[x].style.display = "none";          
      } 
      slidesH[i].style.display = "block";
      i++;
      //slideRandom(i-1);  
}

function slideRandom(n) {
  let elem = document.getElementsByClassName("mensagem");   
  let x = Math.round(Math.random()*(-screen.height));
  let x2 = Math.round(Math.random()*(-screen.height));
  let y = Math.round(Math.random()*(screen.width));
  let y2 = Math.round(Math.random()*(screen.width));
  let id = setInterval(frame, 1);    

  elem[n].classList.add("fade");
  function frame() {    

  if (x == x2) {
    clearInterval(id);
    elem[n].classList.remove("fade");
    } else {
      elem[n].style.top = x + 'px'; 
      elem[n].style.left = y + 'px'; 
      console.log("x = "+x);
      console.log("y = "+y);
      if(x > x2){
        x--; 
      }else {
        x++;
      }
      if(y > y2){
        y--; 
      }else {
        y++;
      }
    }
    console.log("x = "+x);
      console.log("y = "+y);
  }      
}