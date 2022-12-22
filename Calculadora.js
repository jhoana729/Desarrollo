function result(value){
	document.getElementById('resultado').value+=value
}
function clr(){
	document.getElementById('resultado').value = ""
}
function solve(){
	 var x = document.getElementById('resultado').value
	 var y = eval(x)
	 document.getElementById('resultado').value = y
}