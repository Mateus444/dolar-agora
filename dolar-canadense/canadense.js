	let jsonRetorno = new XMLHttpRequest();
	let url = "https://economia.awesomeapi.com.br/json/last/CAD-BRL";

	jsonRetorno.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
      		let retorno = jsonRetorno.responseText;
      		let retornoParaObject =  JSON.parse(retorno);
      		let cotacao = retornoParaObject.CADBRL.bid;
      		let varicao = retornoParaObject.CADBRL.pctChange;
      		var cotacaoFloat = parseFloat(cotacao);
      		var varicaoFloat = parseFloat(varicao);
		      document.getElementById("cotAtual").innerHTML = cotacaoFloat.toFixed(2);
      		document.getElementById("entrada-2").value = cotacaoFloat.toFixed(2);
      		document.getElementById("variaValor").innerHTML = varicaoFloat;

          if (varicaoFloat > 0) {
            document.getElementById("variaValor").style.color = "#00FF7F";
          }
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
	  
	  function criarTabela() {
	    let multi = [2,10,20,30,50,100,1000,1500];
	    let tbody = document.getElementById("tbody");
	    tbody.innerText = "";
	    for (let i = 0; i < 8; i++) {
	      let tr = tbody.insertRow();
	      let td_cotacao = tr.insertCell();
	      let td_real = tr.insertCell();
	    
	      td_cotacao.innerText = "C$"+" "+multi[i];
	      let conversao = multi[i] * cotacaoFloat;
	      td_real.innerText = conversao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	    }
	  }
	  
	  criarTabela();
  		
	}

	jsonRetorno.open("GET", url, true);
	jsonRetorno.send();