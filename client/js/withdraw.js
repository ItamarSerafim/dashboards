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


//--------------------------------------------------------------

//Sort algorithm:
var items = [10,1,22,15,36,17,20,3,9,29];
function sort(array, direction){
	var l = array.length;
	for(var i=0; i < l; i++){
		var item = array[i];
        for(var j=0; j < l; j++){
			var desc = direction == 'desc' ;
			if ((array[j] < item) && desc){
				var itemTemp = array[i];
				array[i] = array[j];
				array[j] = itemTemp;
			}
			else if(array[j] > item){
				var itemTemp = array[i];
				array[i] = array[j];
				array[j] = itemTemp;
			}
			console.log(array);
        }
	}
	return array;
}

console.log('Before sorting: ',items);
console.log('After sorting: ', sort(items));


//--------------------------------------------------------------

//Given an array of integers, find all positive numbers that has an oposit in the same array.
var array = [1,-1,2,-2,3,-3,4,-4,5,-5, 6, 7, -8,8];
var posit = array.filter(function(item){return item >= 0 });
var negat = array.filter(function(item){return item <= 0 });
var hasOposit = [];
var l = posit.length;
for(var i = 0; i < l; i++){
	var n = posit[i];
	if(negat.indexOf(-n) != -1) hasOposit.push(n);
}
console.log(hasOposit);
//[1, 2, 3, 4, 5, 8]
