function add(){
	//elemento padre
	var padre =  document.getElementById('conteiner');

	//crear div contenedor
	var newConteiner = document.createElement('div');

	//crear input
	var newInput = document.createElement('input');

	//crear boton
	var boton = document.createElement('button');

	/*//crear icono
	var plus = document.createElement('span');
	plus.classList.add('icon-plus', 'plus');
	plus.setAttribute('class', 'plus');
	newConteiner.appendChild(plus);
	*/

	//agregar las clases
	newConteiner.setAttribute('id','contenedor');
	newInput.setAttribute('id','inputCreate');
	boton.setAttribute('id', 'btn');

	//agregar al padre
	newConteiner.appendChild(newInput);
	newConteiner.appendChild(boton);


	padre.appendChild(newConteiner);

	conteiner.addEventListener('click', function(e){
		alert("hola mundo");
	})
}