function carregaSlides(){
  var predio = doc.predio;
var captionText = document.getElementById("caption");
for(x=0; x<predio.length; x++){

  document.getElementById("slides").innerHTML += 
  `<div class="slidesProj">
        <img  class="building" src="${predio[x].foto}">
        
        <div class="caption-container">
          <h2>Bairro ${predio[x].bairro}</h2>
          <h4><b>Preço:</b> R$ ${predio[x].preco}</h4>
          <p><b>Área:</b> ${predio[x].area}</p>
          <p><b>Quarto:</b> ${predio[x].quarto}</p>
          <p><b>Banheiro:</b> ${predio[x].banheiro}</p>
          <p><b>Vaga:</b> ${predio[x].vaga}</p>
        </div>
    </div>`;

    

    document.getElementById("row").innerHTML +=
    `<div class="column">
      <img class="mini" src="${predio[x].foto}" 
      onclick="currentSlide(${x+1})" alt="Bairro ${predio[x].bairro}">
    </div>`;

}
/*Next and previous buttons*/
document.getElementById("slides").innerHTML += 
   `<span class="prev" onclick="plusSlides(-1)">&#10094;</span>
     <span class="next" onclick="plusSlides(1)">&#10095;</span>`;


var dots = document.getElementsByClassName("mini");
var slides = document.getElementsByClassName("slidesProj");
slides[0].style.display = "block";
dots[0].className += " active";
}

var slideIndex = 1;
//showSlides(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidesProj");
  var dots = document.getElementsByClassName("mini");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }  
  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "block";
 
}


function loadDoc(file, func) {
  var xhttp = new XMLHttpRequest();
  doc = "";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      doc = JSON.parse(this.responseText);
    func(doc);  
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
loadDoc("js/construcao.json",carregaSlides);