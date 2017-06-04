function sacar(x){
	var xOriginal = x;
    var notas = [100, 50, 20, 10, 5, 2];
    var menorNota = 2;
    var maiorNota;
    var arrayResultado = [];
    while(x >= menorNota){
        var l = notas.length;
        for (var i=0; i < l; i++){   
           var notaAtual = notas[i];
           if (notaAtual <= x) { 
              maiorNota = notas[i]; break;
           }
        }
        arrayResultado = arrayResultado.concat(Array(parseInt(x/maiorNota)).fill(maiorNota));   
        x = x % maiorNota;
    }

	var soma = arrayResultado.reduce(function(a,b){return a+b;});
	if(soma == xOriginal) return arrayResultado.map(function(a){ return 'R$'+a});//Next time I'll try to check it before do the operations.
	else return 'Por favor, escolha um valor múltiplo de ' + notas.join(', ');
}

var saquesTest = [1560, 872, 125, 49, 23, 10, 2, 5];
var l = saquesTest.length;
for(var i = 0; i < l; i++) console.log('R$' + saquesTest[i] + ' = ' + sacar(saquesTest[i]));
