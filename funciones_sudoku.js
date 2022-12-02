var numA;
var numB;
var numC;
var numD;
var numE;
var numF;
var numG;
var numH;
var numI;


var mal = false;
var abc = "abcdefghi".split("");
var error = "";


function comprobar() {
	evaluarFila();

	if (!mal) {
		evaluarColumna();
		if(!mal) {
			evaluarBloque();
		}
	}
	(mal) ? perdiste() : ganaste();	
}

function evaluarFila() {
	var fila = "";
	var valor = "";

	for(i=0; i<abc.length; i++) {
		for(j=1; j<10; j++) {
			valor = document.getElementById(abc[i]+j).value;
			if (fila.includes(valor) || valor=="") {
				error = abc[i]+j;
				j=10;
				i=10;
				mal = true;
			}
			else
				fila += valor;
		}
		fila = "";
	}
}

function evaluarColumna() {
	var columna = "";
	var valor = "";

	for(i=1; i<abc.length; i++) {
		for(j=0; j<9; j++) {
			valor = document.getElementById(abc[j]+i).value;
			if (columna.includes(valor) || valor=="") {
				error = abc[i]+j;
				j=10;
				i=10;
				mal = true;
			}
			else
				columna += valor;
		}
		columna = "";
	}
}

function evaluarBloque() {
	var fila = "";
	var valor = "";
	var pot_fila = 0;
	var pot_columna = 0;

	for(h=0; h<9; h++) {
		for(i=0; i<3; i++) {
			for(j=1; j<4; j++) {
				valor = document.getElementById(abc[i+pot_fila]+(j+pot_columna)).value;
				if (fila.includes(valor) || valor == "") {
					error = abc[i]+j;
					j=10;
					i=10;
					mal = true;
				}
				else
					fila += valor;
			}
		}
		pot_columna += 3;
		fila = "";
		if(pot_columna >= 9) {
			pot_columna = 0;
			pot_fila += 3;
		}
	}
}

function setTablero() {
	var elemento;
	//alert(document.getElementById("fila_e").innerHTML);
	for(i=0; i<9; i++) {
		elemento = document.getElementById("fila_"+abc[i]);
		for(j=1; j<10; j += 3) {
			elemento.innerHTML += "<td>\n"
				+ "<input type='text' maxlength='1' id='"+abc[i]+(j)+"' required='true'></input>\n"
				+ "<input type='text' maxlength='1' id='"+abc[i]+(j+1)+"' required='true'></input>\n"
				+ "<input type='text' maxlength='1' id='"+abc[i]+(j+2)+"' required='true'></input>\n"
				+ "</td>";
		}
//	<input type='text' maxlength='1' id='"+abc[i]+(j+2)+"' required='true'>
	}

	var opcion = 1;
 
	switch (opcion) {
		case 1: tablero_b();
		break;
		case 2: tablero_c();
		break;
		case 3: tablero_d();
		break;
		default: tablero_a();
	}


	var lista = [numA, numB, numC, numD, numE, numF, numG, numH, numI];

	for(i=0; i<lista.length; i++) {
		for(j=0; j<lista[i].length; j++) {
			document.getElementById(lista[i][j]).value = (i+1);
			document.getElementById(lista[i][j]).disabled = true;
		}
	}
}

function tablero_a() {
	numA = ["a1", "c9", "f7", "g8", "h6", "i3"];
	numB = ["b6", "f5", "g4"];
	numC = ["a2", "b8", "c5", "e1", "f9", "h7"];
	numD = ["a8", "b5", "c2", "d3", "e7", "g1"];
	numE = ["b2", "e4", "f1", "i5"];
	numF = ["d9"];
	numG = ["f8"];
	numH = ["a3", "b9", "c4", "d6", "e8", "h1"];
	numI = ["d8", "h7"];
}

function tablero_b() {
	numA = ["a7", "b5", "c3", "e8", "g2", "i9"];
	numB = ["a8", "b6", "c2", "d4", "e7", "f3"];
	numC = [];
	numD = ["f2", "g7", "h5", "i1"];
	numE = ["b3", "c5", "e1", "h2"];
	numF = ["b2", "c9", "e6", "i7"];
	numG = ["c6", "f8", "h9", "i4"];
	numH = ["b8", "f5"];
	numI = ["a4", "b1", "c7", "e2", "g3", "h6"];
}

function tablero_c() {
	numA = ["", "", "", ""];
	numB = ["", "", "", ""];
	numC = ["", "", "", ""];
	numD = ["", "", "", ""];
	numE = ["", "", "", ""];
	numF = ["", "", "", ""];
	numG = ["", "", "", ""];
	numH = ["", "", "", ""];
	numI = ["", "", "", ""];
}

function tablero_d() {
	numA = ["", "", "", ""];
	numB = ["", "", "", ""];
	numC = ["", "", "", ""];
	numD = ["", "", "", ""];
	numE = ["", "", "", ""];
	numF = ["", "", "", ""];
	numG = ["", "", "", ""];
	numH = ["", "", "", ""];
	numI = ["", "", "", ""];
}

function perdiste() {
	alert("MAL");
	mal = false;
}


function ganaste() {
	alert("FELICIDADES, GANASTE");
}








