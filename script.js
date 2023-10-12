// Esto agrega a la panatalla el valor del botón de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Esta accion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

//Esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}