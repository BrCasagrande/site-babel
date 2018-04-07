const slidesH = document.getElementsByClassName("slidesHome");
let i = 0;	

slidesH[slidesH.length-1].className += " last";	
setInterval(() => {carousel()},7000);

/* "Carousel" */
const carousel = () =>{  
  if(i >= slidesH.length){ i = 0}//reset carousel    
  for (x = 0; x < slidesH.length; x++) {
    slidesH[x].style.display = "none"; 
  } 
  slidesH[i].style.display = "block";    
  i++;
}