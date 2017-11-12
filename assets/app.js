var original = document.getElementById('original');
var comment = document.getElementById('comment');
var boton = document.getElementById('btn');

comment.addEventListener('click', function(){
	boton.classList.remove('show');
	original.classList.add('colorO');
})

boton.addEventListener('click', function(){
	//guardar lo que usuario escribio
	comment.value;
	//limpiar input
	comment.value = '';
	//sacar boton
	boton.classList.remove('show');
	//creamos añadir tarea
	var addTarea = document.createElement('p');
	var txtArea = document.createTextNode('Añadir una tarea');
	//añadimos al div
	addTarea.appendChild(txtArea);
	original.appendChild(addTarea);
})