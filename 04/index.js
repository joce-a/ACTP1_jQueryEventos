/*Para comenzar a practicar con la delegación de eventos, lo que haremos será crear
  una lista de nombres donde se le pedirá al usuario que ingrese un nombre y
  además tendrá la posibilidad de eliminar alguno cuando lo requiera.

  Para conseguir eso deberemos seguir estos pasos:
    1. Cuando se le haga click al botón con clase add_name guardaremos en una variable el
    retorno de la función prompt (explicado en el tip).
    2. Hacer un append en el tag '.names', donde crearemos un string que contenga:
      a) Un li que englobe toda la información
      b) Un span que contenga la información recibida desde el prompt
      c) Un link con clase remove_name, que nos permitirá eliminar el elemento de la lista
    3. Mediante delegación de eventos le agreguemos a todos los links vacíos una prevención
    de eventos para que cuando le hagamos click no aparezca en la URL el signo '#'.
    4. Crear una función que escuche el click del botón remove_name y seleccionará el li en
    cuestión para luego borrarlo por medio del método remove() de jQuery.
    HINT: Recuerda lo aprendido de traversing, si no; puedes repasarlo en esta dirección:
    https://api.jquery.com/category/traversing/


  Tip: con la función prompt() podremos lanzar un modal donde el usuario ingresará cada uno
  de los nombres. Esta función requiere son dos parámetros: a) El primero hace referencia
  al texto que le dirá al usuario qué hacer. b) El segundo parámetro se refiere al valor por
  defecto del retorno de la función, cosa que también puede ser tomada como una sugerencia
  para el usuario. Esta función retorna un valor que puede ser almacenado en una variable y,
  posteriormente, puede ser utilizado en cualquier otro lugar.
  Por favor, toma como ejemplo éste código:
  var data = prompt('Por favor agrega un nombre a la lista', 'Harry Potter');*/

  $(document).ready(function(){
  	$('.add_name').on('click', function(){
  		var listName = prompt('Por favor, agrega un nombre a la lista', 'Nombre - Apellido');
  		//return listName;
  		//console.log(listName)

  	$('.names').append('<li><a class="remove_name" href="#"><span>'+ listName +'</span></a></li>');

  	$('ul').on('click', 'li', function(e){
  		e.preventDefault();
  		});


//este último está pendiente
  	$('ul').children('li')
  		   .find('.remove_name')


  	
  		$(this).on('click', function(){
  			.remove('li')
  		})
  			


  	});


  }); //fin documentready