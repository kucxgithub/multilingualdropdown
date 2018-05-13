/****

	Consists of the object representation of a language and functionalities 
	for the multilingual dropdown to display world languages on the front-end 
	of the user.
	
	Author: Urate, Karen
	GitHub: https://github.com/kucxgithub/multilingualdropdown
	
	You are free to use this for personal and commercial purposes.
	
****/


/**
		
	Language(country, language, img, link)
		
	Parameters:
		-	country: Country's 3-Letter Code (String)
		-	language: Language Name (String)
		-	img: file location of the image (String)
		-	link: the URL or link you'd like to re-direct the user to (String)
		
**/ 
function Language(country, language, img, link) {
	
    this.country = country;
    this.language = language;
	this.img = img;
	this.link = link;
	
}

/**
	Prints the language items of your multilingual dropdown.
	
	language_items: an array of Language objects
**/
function printLanguageList(language_items) {
	var language_list_parent = document.getElementById("language-items");
	var language_list = "";
	for (i = 0; i < language_items.length - 1; i++) {
		language_list = language_list + "<a class=\"dropdown-item\" role=\"presentation\" href=\"" + language_items[i].link + "\">";
		language_list = language_list + "<img src=\"" + language_items[i].img + "\" class=\"icon-flag mr-2 img-fluid\" alt=\"Language Item\"/>"
		language_list = language_list + language_items[i].country + " - " +  language_items[i].language;
		language_list = language_list + "</a>";
	}
	
	language_list_parent.innerHTML = language_list;
}



/**
	Prints the first language to display for your multilingual dropdown.
	
	language_items: an array of Language objects
**/
function printLanguageToDisplay(language_items) {
	var first_language_to_display = document.getElementById("language-main");
	var first_element = "<img src=\"" + language_items[0].img + "\" class=\"icon-flag mr-2 img-fluid\" alt=\"Language Item\"/>"
	first_element = first_element + language_items[0].country + " - " +  language_items[0].language;
	
	first_language_to_display.innerHTML = first_element;
}

