var btn = document.getElementsByClassName("toogle");

for(let i=0; i < btn.length; i++){
	btn[i].addEventListener("click",toogleMenu,false);
}


function toogleMenu() {
	let menuHeight = document.getElementById("menu").offsetHeight;

	if(menuHeight == "0"){
	    document.getElementById("menu").style.height = "auto";
	    document.getElementById("menu").style.opacity = "1";
	} else {
		document.getElementById("menu").style.height = "0";
	    document.getElementById("menu").style.opacity = "0";
	    
	}

}

