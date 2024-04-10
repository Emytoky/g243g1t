function abrir(num){
    alert(num);
    for(let i = 1; i <= 5; i++){
        let id_aba = "aba" +i;
        let id_ab = "a" + i;
        document.getElementById(id_aba).disabled = false;
        document.getElementById(id_ab).style.display = "nome";
    }


    if(num == "1"){
        document.getElementById("aba1").disabled = true;
        document.getElementById("a1").style.display = "block";
    }
    if(num == "2"){
        document.getElementById("aba2").disabled = true;
        document.getElementById("a2").style.display = "block";
    }
    if(num == "3"){
        document.getElementById("aba3").disabled = true;
        document.getElementById("a3").style.display = "block";
        pegar_hora();
        hd = document.getElementById("hd").value = hd;
        md = ocument.getElementById("md").value = md;
        sd = document.getElementById("sd").value = sd;
    }
    if(num == "4"){
        document.getElementById("aba4").disabled = true;
        document.getElementById("a4").style.display = "block";
    }
    if(num == "5"){
        document.getElementById("aba5").disabled = true;
        document.getElementById("a5").style.display = "block";
    }
}
function hora_atual(){
   const d = new Date();
   let h= d.getHours();
   let m= d.getMinutes();
   let s= d.getSeconds();
   if (s < 10){
    s = "0" + h;
   }
   if (h < 10){
    h = "0"+ m;
   }
   if (m < 10){
    m = "0"+ s;
   }
   document.getElementById("h").innerHTML = h+":"+m+":"+s;
}
setInterval(() =>{
    hora_atual();
},1000);

function contador(){
    let inicio = document.getElementById("inicio").value;
    let fim = document.getElementById("fim").value;
    if(inicio == fim){
        contar.clearInterval();
    }else{
        inicio++;
        document.getElementById("valor").innerHTML = inicio;
    }
}
let contar = null;
let inicio = 0 ;
let fim = 0;
function iniciarContagem(){
     inicio = document.getElementById("inicio").value;
     fim = document.getElementById("fim").value;
 contar = setInterval(() =>{
     contador();
},1000);
}
let hd = 0;
let md = 0;
let sd = 0;
let alarme = null;
function pegar_hora(){
    let d = new Date();
    hd = d.getHours();
    md = m.getMinutes();
    sd = s.getSeconds();
}
function ativar_alarme(){
    let d = new Date();
    if(hd==d.getHours()&& md==d.getMinutes() && sd==d.getSeconds()){
        alert("alarme... voltando pra aba3");
        abrir(3);
    }
}
function ligar_alarme(){
    hd = document.getElementById("hd").value;
    md = ocument.getElementById("md").value;
    sd = document.getElementById("sd").value;
    alarme = setInterval(ativar_alarme,1000);
}

