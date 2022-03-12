var stylesheet = document.getElementById("pageStyle");
function changeStyle(){
	if(stylesheet.getAttribute('href') == 'css/night.css'){
		stylesheet.setAttribute('href', 'css/day.css');
	}
	else{
		stylesheet.setAttribute('href', 'css/night.css');
	}
}

function setStyle(){
	const d = new Date();
	let text = d.toLocaleTimeString();
	let hh = text.substring(0, 2);
	if(hh <= 10 || hh >= 18){
		stylesheet.setAttribute('href', 'css/night.css');
	}
	else{
		stylesheet.setAttribute('href', 'css/day.css');
	}
}
setStyle();