$(document).ready(function(){//para que no se solapen las llamadas, escribimos bien el selector (padre-hijo) 
	$(".make .js-menu").hide(); {//esconde el menú hamburguesa cuando se abre recipe.html
	}

	$(".home .js-back").hide(); {//esconde la flecha cuando se abre index.html
	}
	function printNews(){ //le doy una clase (new-recipes) al párrafo ya existente en el html y le agrego el nodo texto
		$(".new-recipes").text("NUEVAS RECETAS");
	}
	printNews(); //no olvidar llamar a la función!!! XD
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

	
	
});



/* Función que se encarga de pintar TODAS las recetas que tengan marcado el atributo "highlighted" como TRUE */
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(recipe){//recorro el arreglo de las recetas
		if (recipe.highlighted === true) {//si las recetas tienen la propiedad highlighted en true, 
			renderRecipe(recipe);//las enviará como parámetro a la función renderRecipe y la llamará (sólo hace un console log por mientras, en donde las pinta/destaca de un color)
		}
	});
}


/* Función que se encarga de pintar UNA recetas que tenga marcado el atributo "highlighted" como TRUE * Aqui se tiene que crear el HTML que esta en el archivo "templates/templates-recipe.html" */
function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	var divRecetas = $(".list-recipes"); //a este div con esta clase le pasamos como hijo lo que estaba en el template 
	divRecetas.append('<a class="item-recipe" href="#"><span class="attribution">'+//aquí nos mostrará el nombre (título) de la receta y el nombre de su autor
		'<span class="title-recipe">'+ recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe"> '+ recipe.source.name + '</span><span class="bookmarks-recipe">'+
		'<span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+ recipe.name + '.jpg" /></a>');
}

/* Función que se encarga de pintar todas las actividades */
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	
}	

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


