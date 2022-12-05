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
var valor = "";

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

	for(i=0; i<abc.length; i++) {
		for(j=1; j<10; j++) {
			valor = document.getElementById(abc[i]+j).value;
			
			if (fila.includes(valor) || valor=="" || valor<1 || valor>9) {
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

	for(i=1; i<abc.length; i++) {
		for(j=0; j<9; j++) {
			valor = document.getElementById(abc[j]+i).value;
			if (columna.includes(valor) || valor=="") {
				error = abc[j]+i;
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
	var pot_fila = 0;
	var pot_columna = 0;

	for(h=0; h<9; h++) {
		for(i=0; i<3; i++) {
			for(j=1; j<4; j++) {
				valor = document.getElementById(abc[i+pot_fila]+(j+pot_columna)).value;
				if (fila.includes(valor) || valor == "") {
					error = abc[i+pot_fila]+(j+pot_columna);
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
				+ "<input type='number' id='"+abc[i]+(j)+"' min='1' max='9' required='true'></input>\n"
				+ "<input type='number' id='"+abc[i]+(j+1)+"' min='1' max='9' required='true'></input>\n"
				+ "<input type='number' id='"+abc[i]+(j+2)+"' min='1' max='9' required='true'></input>\n"
				+ "</td>";
		}
	}

	var opcion = Math.floor(Math.random() * 4);
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
	var listaNumeros = "123456789".split("");
	var random;

	for(i=0; i<lista.length; i++) {
		random = Math.floor(Math.random() * (8-i));
		for(j=0; j<lista[i].length; j++) {
			
			document.getElementById(lista[i][j]).value = listaNumeros[random];
			document.getElementById(lista[i][j]).disabled = true;
			
		}	
		listaNumeros.splice(random, 1);
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
	numA = ["d5", "e2", "h3"];
	numB = ["b7", "f8"];
	numC = ["a1", "b4", "c7", "d2", "e8", "f6", "g3", "h9", "i5"];
	numD = ["a3", "c8"];
	numE = ["b8", "c5", "f4", "g6", "i7"];
	numF = ["c1", "g8", "h6", "i3"];
	numG = ["b6", "c3", "d4", "e7", "f1", "i2"];
	numH = ["a9", "d8", "e1", "g7", "h2", "i4"];
	numI = ["b2", "e9"];
}

function tablero_c() {
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

function tablero_d() {
	numA = ["a1", "c7", "d2", "e4", "g3", "h6", "i8"];
	numB = ["a3", "b6", "c8", "d5", "f1", "h2", "i9"];
	numC = ["a5", "b2", "d3", "e8", "f4", "g1", "h7"];
	numD = ["a9", "c1", "d7", "f2", "g5", "i3"];
	numE = ["f6", "h4"];
	numF = ["g9", "i5"];
	numG = ["a7", "e5", "g2"];
	numH = ["d6", "e3", "f7"];
	numI = ["a4", "c3", "d9", "g6"];
}

function perdiste() {
	errorSudoku = document.getElementById(error);
	setTimeout(() => {
		(errorSudoku.disabled) ? 
			errorSudoku.style.background = "#b7daf4":
			errorSudoku.style.background = "none";
	}, 1000);
	errorSudoku.style.background = "#ff9d9d";
	
	mal = false;
}


function ganaste() {
	alert("FELICIDADES, GANASTE");
}









