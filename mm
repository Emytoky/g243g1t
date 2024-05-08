const fila = (_saidaFila) => {
    let dados = [];
    let saidaFila = _saidaFila;
    const enfilerar = valor => {
        dados.push(valor);
        imprimir();
    }
    const tamanhoFila = () => dados.length;
    const filaVazia = () => dados.length < 1;
    const desenfileirar = () => {
        let retirado = null;
        if(!filaVazia()){
            retirado = dados.splice(0,1);
            imprimir();

        }
        return retirado;
    }
    const imprimir = () => {
        let dadosSaida="";
        for (let i=0; i < tamanhoFila(); i++){
            dadosSaida += "["+dados[i].id + "("+dados[i].itens+")]";
        }
        document.getElementById(saidaFila).innerHTML = dados;
    }
    return {enfilerar,desenfileirar}
}

const f1 = Fila("saidaFila1");
const gerarItens = () => Math.floor(Math.random() * (15 - 3) + 2);
const Cliente = (_id,_itens) =>{
    return{
        id:_id,
        itens:_itens

    }

}
const caixa1ChamaProximo = () => {
    let Cliente = f1.desenfileirar();
    let tempo = 200;
    if(cliente){
        tempo = cliente.tempo * 1000;
        setTimeout(caixa1ChamaProximo,tempo);
    }
}
(function(){
    for(let i=1; i<= 15; i++){
        f1.enfilerar(Cliente("C"+i,gerarItens()));
    }

})();




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="filaUnica">
        <span id="saidaFila1"></span>
    </div>


    <script src="estrutura.js"></script>
</body>
</html>





