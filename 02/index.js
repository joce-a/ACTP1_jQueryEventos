	/*Se busca:
	OK 01. Cambiar el texto que se encuentra dentro del cuarto artículo, el
	tercer link y que dice Snapchat. Se busca que ahora diga Pinterest
	y que también se le cambie el atributo href para que ahora vaya a la
	dirección de Pinterest (http://pinterest.com).
	OK 02. Seleccionar todos los link vacíos (que su href sea '#') y prevenir
	su comportamiento por defecto, o sea que al hacerle click no nos
	lleve al top de la página.
	03. Modificar el tamaño de todos los h2 que sean hijos directos de la
	clase header__main y hacerlos el doble de su tamaño.*/


$(document).ready(function(){
	$('.article').eq(3)
				 .children('.article__body')
				 .find('.article__socialnetworks')
				 .find('li')
				 .eq(3)
				 .find('a')
				 .attr('href','http://pinterest.com')
				 .text('Pinterest')

	$('a').find('href')
		  .find('#');
		   $(this).on('click', function(event){
		  	event.preventDefault();
		  });
		  
	$('.header__main').find('h2')
					  .css('font-size','3em');	  
	}) 

	

