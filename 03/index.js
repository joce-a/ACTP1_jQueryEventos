/*- http://api.jquery.com/before/
		- http://api.jquery.com/after/

	1. Seleccionar el cuarto li y por medio de un append
	agrega este string: '<ul><li><a href="#">link 4.a</a></li></ul>'
		1.a Revisa en el inspector de elementos qué resultado has obtenido
	2. Por medio de la misma selección anterior inserta, usando un before
	este otro string: '<li><a href="#">link 3.5</a></li>'
		2.a Revisa la diferencia entre los métodos append y before, ¿logras notar
		la diferencia?

	3. Seleccionar el li que contiene el link número 6 e inserta por medio del
	método prepend el string con el emoji: '😎 ' (emoji de la cara con los
	anteojos de sol)
	4. Con la misma selección utilizaremos el método after para insertar este
	string: '🙂'


	Tip: Para realizar la selección puedes utilizar varias opciones sin necesidad
	de hacer algún cambio en el html. Por ejemplo puedes utilizar cualquier
	selector de CSS como: 'li:nth-child(9)' que seleccionará el noveno elemento que
	tenga el tag li. De hecho, es más versátil que eso y también podríamos seleccionar
	las etiquetas li con número par ('li:nth-child(2n)').

	Tip2: Si al principio del código JS creas 2 variables y les asignas las
	correspodientes selecciones de elementos del DOM que utilizarás en el ejercicio,
	no solo evitarás tener que seleccionar el sexto li como si fuera el séptimo hijo,
	si no que también estarás mejorando tu código y haciendo que funcione más rápido,
	porque el navegador no deberá recorrer constantemente el DOM para encontrar los elementos.*/


$(document).ready(function(){

	var li4 = $('ul li:nth-child(4)')
		li4.append('<ul><li><a href="#">link 4.a</a></li></ul>');
		li4.before('<li><a href="#">link 3.5</a></li>');

	var li6 = $('ul li:nth-child(6)')
		li6.prepend('😎 ');
		li6.after('🙂');

	/*$('ul li:nth-child(4)')
		.append('<ul><li><a href="#">link 4.a</a></li></ul>');

	$('ul li:nth-child(4)')	
		.before('<li><a href="#">link 3.5</a></li>');*/
	
    /*$('ul li:nth-child(6)')
    	.prepend('😎 ');

    $('ul li:nth-child(6)')	
    	.after('🙂');*/

})