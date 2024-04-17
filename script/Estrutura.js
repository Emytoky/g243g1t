let fila_unica = null;

function criarFila(){
    fila_unica = [];
    document.getElementById("fila").innerHTML  = "Fila Vazia"
}
function removerElementoFila(){

}
function inserirElementoFila(){
    let nome = document.getElementById("nome").value;
    if(fila_unica != null){
        fila_unica.push(nome);
    }
 
    document.getElementById("fila").innerHTML =  fila_unica;

}
function verPrimeiroFila(){

}
function removerFila(){
    fila_unica = null;
    document.getElementById("fila").innerHTML  = "Não existe fila. Clique em criar."
}
