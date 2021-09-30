
var resultado;
var Gtabla = [];
var mensaje;


   function calcular1() {
	let nm1 = document.getElementById('n1').value;
	let nm2 = document.getElementById('n2').value;
	let operacion = document.getElementById('operacion').value;

	n1 = parseInt(nm1);
	n2 = parseInt(nm2);

	switch (operacion) {
		case "Suma":
        resultado = n1 + n2;
        mensaje = " "+n1+" + "+n2+" = "+resultado+"";
        respuesta.value = mensaje;
		break;

		case "Resta":
        resultado = n1 - n2;
        mensaje = ""+n1+" - "+n2+" = "+resultado+"";
        respuesta.value = mensaje;
		break;

		case "Multiplicación":
        resultado = n1 * n2;
        mensaje = ""+n1+" * "+n2+" = "+resultado+"";
        respuesta.value = mensaje;
		break;

		case "División":
        resultado = n1 / n2;
        mensaje = ""+n1+" / "+n2+" = "+resultado+"";
        respuesta.value = mensaje;
		break;

		default: 
		break;
	}

	guardar();
}

function guardar() {
	calc = {};
	calculo = document.getElementsByName('calcular');

	for (i in calculo){
       tl = calculo[i];
       calc[tl.id] = tl.value;

	}


	Gtabla.push(calc);
	localStorage.setItem('intro', JSON.stringify(Gtabla));
	 mostrar();
	
}

function mostrar() {
	document.getElementById('calculo').innerHTML='';
	for ( i = 0; i< Gtabla.length; i++) {
     fila = Gtabla[i];

     tr = document.createElement('tr');
     vln = document.getElementById('cal').value;
     vln = vln.replace('{operacion}', fila.operacion);
     vln = vln.replace('{resultado}', fila.respuesta);
     tr.innerHTML = vln;
     document.getElementById('calculo').appendChild(tr);
	}
}

window.onload = function(){
   vln = localStorage.getItem('intro');
   if (vln != null) {
    Gtabla = JSON.parse(vln);
    mostrar();
   }

}

function eliminar() {
    calc = [];
	calculo = document.getElementsByName('calcular');
		document.getElementById('calculo').innerHTML='';
   for (i = 0; i < Gtabla.length; i++) { 
     if(i != calculo){

             calc.push(Gtabla[i]);
    }
   }

  Gtabla = calc;
  localStorage.clear(Gtabla);
  location.reload();



}

function  confirTodo() {
	conf = confirm("¿Estas segruo de eliminar el historial?");

	if (conf == true) {
		eliminar();
	}
}