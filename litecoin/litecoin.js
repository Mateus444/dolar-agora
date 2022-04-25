	let jsonRetorno = new XMLHttpRequest();
	let url = "https://www.mercadobitcoin.net/api/LTC/ticker/";

	jsonRetorno.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
      		let retorno = jsonRetorno.responseText;
      		let retornoParaObject =  JSON.parse(retorno);
      		let cotacao = retornoParaObject.ticker.buy;
      		let cotacaoFloat = parseFloat(cotacao);
          let abertura = retornoParaObject.ticker.open;
          let aberturaFloat = parseFloat(abertura);
          let alta = retornoParaObject.ticker.high;
          let altaFloat = parseFloat(alta);
          let baixa = retornoParaObject.ticker.low;
          let baixaFloat = parseFloat(baixa);
      		document.getElementById("entrada-2").value = cotacaoFloat.toFixed(2);

          document.getElementById('abertura').innerHTML = aberturaFloat.toFixed(2);
          document.getElementById('abertura').style.color = 'white';
          document.getElementById('alta').innerHTML = altaFloat.toFixed(2);
          document.getElementById('alta').style.color = "rgb(0, 255, 127)";
          document.getElementById('baixa').innerHTML = baixaFloat.toFixed(2);
          document.getElementById('baixa').style.color = "#ff3e31";

  			let input1 = document.getElementById('entrada-1');
  			let input2 = document.getElementById('entrada-2');

  			input1.addEventListener('keyup', function() {
  				let input1Float = parseFloat(input1.value);
  				if (input1Float == "") {
  					input2.value = "";
  				}
  				let result = input1Float * cotacaoFloat;
  				input2.value = result.toFixed(2);
  			});

  			input2.addEventListener('keyup', function() {
  				let input2Float = parseFloat(input2.value);
  				if (input2Float == "") {
  					input1.value = "";
  				}
  				let result = input2Float / cotacaoFloat;
  				input1.value = result.toFixed(2);
  			});
  		}
  		
	}

	jsonRetorno.open("GET", url, true);
	jsonRetorno.send();