document.getElementById("card").style.animationDelay = "5s";

function fetchPokemon(id) {
	let pokemonURL = `https://pokeapi.co/api/v2/pokemon/${id}/`; 
	fetch(pokemonURL)
	.then(response => response.json())
	.then(data => {
	  displayResults(data)
	  })
	};
  
	let x;
	for(i = 0; i < 300; i++) {
	  x = Math.floor(Math.random()*100)
	  fetchPokemon(x)
	};
  	
  function displayResults(json) {
	let name = json.name;
	let number = json.id;
	let type = json.types[0].type.name;
	document.getElementById('image').innerHTML = '<img src="'+json.sprites.front_default+'">';
	document.getElementById('name').innerText = name;
	document.getElementById('number').innerText  = number;
	document.getElementById('type').innerText  = type
  }; 
  
  function pressBtn() {
	console.log(`pressBtn`);
	let y;
	for(i = 0; i < 300; i++) {
	  y = Math.floor(Math.random()*100)
	  fetchPokemon(y)
	};
  };
  
pressBtn.addEventListener('next', displayResults());

function getRates() {
let baseUrl = 'http://api.coinlayer.com/api/live?access_key=6cf895f615e4ccf35f5cdb1788f19d50';
    fetch(baseUrl)
    .then(response => response.json())
      .then(data => {
      displayResults(data)
      })
    
      .catch(function(error) {
       console.log(error)
      });
      
      function displayResults(json) {
        console.log('Display: ', json);
        
        let x;
        for(i = 0; i < 1000; i++) {
            x = Math.floor(Math.random()*100)
          };
          
          let returnNames = Object.keys(json.rates);
          let returnValues = Object.values(json.rates);
          let btc = json.rates.BTC;
          let eth = json.rates.ETH;
          let ada = json.rates.ADA;
          let bnb = json.rates.BNB;
          let eos = json.rates.EOS;
          let randName = returnNames[x];
    let random = returnValues[x];
    
    document.getElementById('headerCrypto').innerText = random;
    document.getElementById('randCrypto').innerText = randName;
    document.getElementById('btcRate').innerText = btc;
    document.getElementById('ethRate').innerText = eth;
    document.getElementById('adaRate').innerText = ada;
    document.getElementById('bnbRate').innerText = bnb;
    document.getElementById('eosRate').innerText = eos;
    console.log(x);
  };
};
  getRates();
  
  
  
  
  