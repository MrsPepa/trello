function add(){
	//elemento padre
	var padre =  document.getElementById('newForm');

	//crear div contenedor
	var newConteiner = document.createElement('div');

	//crear input
	var newInput = document.createElement('input');

	//crear boton
	var boton = document.createElement('button');

	//crear nodo de texto en boton
	//var txt = document.createTextNode()

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

/*
	//var clase input
	var keep = document.getElementsByClassName('inputOriginal');

	keep.addEventListener('click', function(){
		return inputOriginal;
	})*/
}