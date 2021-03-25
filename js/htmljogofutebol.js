var objPartida = new jogofutebol();
function criarObj(){
    objPartida.time1 = txtTimeUm.value;
    objPartida.time2 = txtTimeDois.value;
    alert("DEUU");
}
function exibir() {
    objPartida.mostrarPlacar();
}
function pontuar(){
    let nometime;
    nometime = txtTime.value;
    objPartida.marcarGol(nometime);
    objPartida.mostrarPlacar();
}