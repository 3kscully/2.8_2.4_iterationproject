function findcontent(content){
	const element = document.getElementById(content);
	element.scrollIntoView(true);
	window.scrollBy(0, -150);
}
