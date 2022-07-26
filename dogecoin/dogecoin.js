	let jsonRetorno = new XMLHttpRequest();
	let url = "https://www.mercadobitcoin.net/api/DOGE/ticker/";

	jsonRetorno.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
      		let retorno = jsonRetorno.responseText;
      		let retornoParaObject =  JSON.parse(retorno);
      		let cotacao = retornoParaObject.ticker.buy;
      		var cotacaoFloat = parseFloat(cotacao);
          let abertura = retornoParaObject.ticker.open;
          let aberturaFloat = parseFloat(abertura);
          let alta = retornoParaObject.ticker.high;
          let altaFloat = parseFloat(alta);
		         document.getElementById("cotAtual").innerHTML = cotacaoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
		         document.getElementById("cotAtual2").innerHTML = cotacaoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          let baixa = retornoParaObject.ticker.low;
          let baixaFloat = parseFloat(baixa);
      		document.getElementById("entrada-2").value = cotacaoFloat.toFixed(2);

          document.getElementById('abertura').innerHTML = aberturaFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          document.getElementById('abertura').style.color = 'white';
          document.getElementById('alta').innerHTML = altaFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          document.getElementById('alta').style.color = "rgb(0, 255, 127)";
          document.getElementById('baixa').innerHTML = baixaFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          document.getElementById('baixa').style.color = "#ff3e31";

                         function mostrarData() {
		               let data = retornoParaObject.ticker.date;
		               let novaData = new Date(data * 1000);
		               let horas = ("0"+novaData.getHours()).slice(-2);
		               let minutos = ("0"+novaData.getMinutes()).slice(-2);
		               let segundos = ("0"+novaData.getSeconds()).slice(-2);
		               let dia = ("0"+novaData.getDate()).slice(-2);
		               let mes = ("0"+(novaData.getMonth() + 1)).slice(-2);
		               let ano = novaData.getFullYear();
		               document.getElementById("data").innerHTML = dia+"-"+mes+"-"+ano + " " + horas+":"+minutos+":"+segundos;
		          }
		          
		          mostrarData();
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
	                              
	      td_cotacao.innerText = "Ð"+" "+multi[i];
	      let conversao = multi[i] * cotacaoFloat;
	      td_real.innerText = conversao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	    }
	  }
	  
	  criarTabela();
	}

	jsonRetorno.open("GET", url, true);
	jsonRetorno.send();
