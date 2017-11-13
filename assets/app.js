//variable para contenedor de input
var original = document.getElementById('original');

//variable para input
var comment = document.getElementById('comment');

//variable para boton
var boton = document.getElementById('btn');

//mostrar al hacer click
comment.addEventListener('click', function(){
	boton.classList.remove('show');
	original.classList.add('colorO');
})

//variable para nuevo contenedor
var newForm = document.getElementById('newForm');

//accion del boton
boton.addEventListener('click', function(){

	//guardar lo que usuario escribio
	var save = comment.value;
	//limpiar input
	document.getElementById('comment').value = '';
	//crear contenedor
	var newDiv = document.createElement('div');

	//creamos elementos
	var contDiv = document.createElement('div');
	var addTarea = document.createElement('p');
	contDiv.setAttribute('id','listTittle');
	//añadimos al div

	addTarea.appendChild(txtArea);
	original.appendChild(addTarea);
})