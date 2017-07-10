$(document).ready(function(){//para que no se solapen las llamadas, escribimos bien el selector (padre-hijo) 
	$(".make .js-menu").hide(); {//esconde el menú hamburguesa cuando se abre recipe.html
	}

	$(".home .js-back").hide(); {//esconde la flecha cuando se abre index.html
	}
	/* Act on the event */
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();

	
});

	function printNews(){ //le doy una clase (new-recipes) al párrafo ya existente en el html y le agrego el nodo texto
		$(".new-recipes").text("NUEVAS RECETAS");
	}


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
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


