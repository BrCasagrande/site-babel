	let nome = document.getElementById("nome");
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
	verificaCampo();
	
});

estado.addEventListener('click', () =>{
	let index = estado.selectedIndex;
	selecionaCidade(index);
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

console.log(true != false);
console.log(!false);


const limparContato = () =>{
	nome.value = ""; 
	email.value = ""; 
	estado.value = estado[estado.length]; 
	cidade.innerHTML = ""; 
	descricao.value = ""; 
	selectCons.value = selectCons[selectCons.length]; 
	nome.focus();
}

const selecionaEstado = () =>{
	let estadoLista = estados.estados;
	for(i=0; i<estadoLista.length; i++){
		estado.innerHTML += 
		`<option value="${estadoLista[i].sigla}">${estadoLista[i].sigla}</option>`;
	}
	estado.innerHTML +=`<option value="">Selecione</option>`;
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
	selectCons.innerHTML +=`<option value="">Selecione</option>`;
	selectCons.value = selectCons[i].value;
}


init();