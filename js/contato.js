	let nome = document.getElementById("name");
	let email = document.getElementById("email");
	let estado = document.getElementById("estado");
	let cidade = document.getElementById("cidade");
	let descricao = document.getElementById("descricao");
	let selectCons = document.getElementById("construcao");


const init = () =>{
	selecionaEstado();
	listaConstrucao();
}

document.getElementById("btn").addEventListener('click', function(event) {
	event.preventDefault();

	limparContato();
});

estado.addEventListener('click', () =>{
	let index = estado.selectedIndex;
	selecionaCidade(index);
});

const verificaCampo = () =>{
	const pattern = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
	/*if(nome.value == ""){
		alert('Preencha o campo Nome!');
	}
	if(email.value == "" || email.value != pattern){
		alert('Preencha o campo email corretamente!');
	}*/

	console.log(pattern == "bruno@gmail.com");
	console.log(pattern);
}
//verificaCampo();
const limparContato = () =>{
	nome.value = ""; 
	email.value = ""; 
	estado.value = estado[estado.length]; 
	cidade.innerHTML = ""; 
	descricao.value = ""; 
	selectCons.value = selectCons[0].label; 
	nome.focus();
}

const selecionaEstado = () =>{
	let estadoLista = estados.estados;
	for(i=0; i<estadoLista.length; i++){
		estado.innerHTML += 
		`<option value="${estadoLista[i].sigla}">${estadoLista[i].sigla}</option>`;
	}
	estado.innerHTML +=`<option value=""></option>`;
	estado.value = estado[i].value;
}

const selecionaCidade = index =>{
	let cidadeLista = estados.estados[index].cidades;
	cidade.innerHTML = "";

	for(i=0; i<cidadeLista.length; i++){		
		cidade.innerHTML += 
		`<option>${cidadeLista[i]}</option>`;
	}
}
const listaConstrucao = () =>{
	let listaCons = ["Casa","Empresa","Prédio Residencial","Prédio Comercial"];

	for(i=0; i<listaCons.length; i++){		
		selectCons.innerHTML += 
		`<option>${listaCons[i]}</option>`;
	}
}


init();