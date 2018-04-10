	let nome = document.getElementById("nome");
	let email = document.getElementById("email");
	let estado = document.getElementById("estado");
	let cidade = document.getElementById("cidade");
	let descricao = document.getElementById("descricao");
	let selectCons = document.getElementById("construcao");

const init = () =>{
	loadDoc("https://raw.githubusercontent.com/BrCasagrande/site-babel/master/js/estados.json",
		selecionaEstado);
	listaConstrucao();
}

document.getElementById("btn").addEventListener('click', function(event) {
	event.preventDefault();
	verificaCampo();
	
});

estado.addEventListener('click', () =>{
	let index = estado.selectedIndex;
	if(estado.value == ""){cidade.innerHTML = "";}
	else{selecionaCidade(index-1);}
});

const verificaCampo = () =>{
	const pattern = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
	const campos = [nome, email, estado, cidade, descricao, selectCons];
	let lista = "";
	for(item in campos){
		if(campos[item].value == ""){ lista += '\n'+campos[item].name; }
	}
	if(lista != ""){ alert('Campo vazio: '+ lista); }
	else if(!pattern.test(email.value)){
		alert('Coloque um e-mail valido'); 
		email.focus();
	}
	else{limparContato()};
}

const limparContato = () =>{
	nome.value = ""; 
	email.value = ""; 
	estado.value = ""; 
	cidade.innerHTML = ""; 
	descricao.value = ""; 
	selectCons.value = ""; 
	nome.focus();
}

const selecionaEstado = (doc) =>{
	console.log(doc.estados);
	let estadoLista = doc.estados;
	estado.innerHTML +=`<option value="">Selecione</option>`;
	estado.value = "";
	for(i in estadoLista){
		estado.innerHTML += 
		`<option value="${estadoLista[i].sigla}">${estadoLista[i].sigla}</option>`;
	}

}

const selecionaCidade = index =>{
	let cidadeLista = doc.estados[index].cidades;
	cidade.innerHTML = "";
		for(i in cidadeLista){		
			cidade.innerHTML += 
			`<option>${cidadeLista[i]}</option>`;
		}		
	
}
const listaConstrucao = () =>{
	let listaCons = ["Casa","Empresa","Prédio Residencial","Prédio Comercial"];
	selectCons.innerHTML +=`<option value="">Selecione</option>`;

	for(i in listaCons){		
		selectCons.innerHTML += 
		`<option>${listaCons[i]}</option>`;
	}
	selectCons.value = "";
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

init();