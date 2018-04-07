	let nome = document.getElementById("name");
	let email = document.getElementById("email");
	let estado = document.getElementById("estado");
	let cidade = document.getElementById("cidade");
	let descricao = document.getElementById("descricao");
	let selectCons = document.getElementById("construcao");


document.getElementById("btn").addEventListener('click', function(event) {
	event.preventDefault();

	limparContato();
});

estado.addEventListener('click', () =>{
	let index = estado.selectedIndex;
	selecionaCidade(index);
});

function limparContato(){
	nome.value = ""; 
	email.value = ""; 
	estado.value = estado[0].value; 
	cidade.value = ""; 
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
	
}

const selecionaCidade = (index) =>{
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

selecionaEstado();
listaConstrucao();