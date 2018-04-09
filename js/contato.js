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
	selecionaCidade(index-1);
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
	estado.value = estado[estado.length]; 
	cidade.innerHTML = ""; 
	descricao.value = ""; 
	selectCons.value = selectCons[selectCons.length]; 
	nome.focus();
}

const selecionaEstado = () =>{
	let estadoLista = estados.estados;
	estado.innerHTML +=`<option value="">Selecione</option>`;
	estado.value = "";
	for(i in estadoLista){
		estado.innerHTML += 
		`<option value="${estadoLista[i].sigla}">${estadoLista[i].sigla}</option>`;
	}

}

const selecionaCidade = index =>{
	let cidadeLista = estados.estados[index].cidades;
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


init();