# multilingualdropdown
A multilingual dropdown component written in plain JS with Bootstrap 4.1.

/****

	Consists of the object representation of a language and functionalities 
	for the multilingual dropdown to display world languages on the front-end 
	of the user.
	
	Author: Urate, Karen
	GitHub: https://github.com/kucxgithub/multilingualdropdown
	
	You are free to use this for personal and commercial purposes.
	
****/

<h1>Object Representations</h1>

Language(country, language, img, link)

Parameters:
		-	country: Country's 3-Letter Code (String)
		-	language: Language Name (String)
		-	img: file location of the image (String)
		-	link: the URL or link you'd like to re-direct the user to (String)
    
<h1>Methods and Functions</h1>

printLanguageList(language_items): Prints the language items of your multilingual dropdown.
printLanguageToDisplay(language_items): Prints the first language to display for your multilingual dropdown.
