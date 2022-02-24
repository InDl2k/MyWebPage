const obj = {
			'newbie': 'gray', 
			'pupil': 'green',
			'specialist': '#03a89e',
			'expert': 'blue', 
			'candidate master': '#a0a',
			'master': '#ff8c00',
			'international master': '#ff8c00',
			'grandmaster': '#03a89e',
			'international grandmaster': 'red',
			'legendary grandmaster': 'red',
			};
let colors = new Map(Object.entries(obj));


async function updateCFRating(){
  	const url = 'https://codeforces.com/api/user.info?handles=InDI2k&lang=eu';
  	let response = await fetch(url);
  	if(response.ok){
  		let json = await response.json();
  		let myMap = new Map(Object.entries(json));
  	  	let mapa = new Map(Object.entries(myMap.get('result')[0]));
		//set value
  	  	document.getElementById("rating").innerHTML = mapa.get('rating');
  	  	document.getElementById("rank").innerHTML = mapa.get('rank');
  	  	document.getElementById("maxRating").innerHTML = mapa.get('maxRating');
  	  	document.getElementById("maxRank").innerHTML = mapa.get('maxRank');
  	  	//set color
  	  	document.getElementById("rating").style.color = colors.get(mapa.get('rank'));
  	  	document.getElementById("rank").style.color = colors.get(mapa.get('rank'));
  	  	document.getElementById("maxRating").style.color = colors.get(mapa.get('maxRank'));
  	  	document.getElementById("maxRank").style.color = colors.get(mapa.get('maxRank'));
  	  	console.log("Successful!");
  	}
  	else{
  		console.log("Error to get data from CF: " + response.status)
  		console.log("Trying again...");
  		setTimeout(updateCFRating, 1000);
  	}
}

updateCFRating();