var objPersonagem = new mario(); 
function criarObj() 
{
    objPersonagem.personagem = nome.value;
    if (objPersonagem.personagem == "Selecione") {
        objPersonagem.personagem = "Escolher";
    }
}

function exibir()
{
    if(objPersonagem!=null && objPersonagem.personagem!="Escolher"){
        objPersonagem.exibirNaDiv();
    } 
    else
    {
        alert("Personagem não cadastrado");
    }
}
function poder()
{
    let obj;
    obj = txtPoderes.value;
    if(objPersonagem.vivo == true && objPersonagem.personagem!="Escolher")
    {
        objPersonagem.pegarItem(obj);
        objPersonagem.exibirNaDiv();
    }
}
function luta()
{   if(objPersonagem.personagem!="Escolher")
    {
        objPersonagem.serAtacado();
        objPersonagem.exibirNaDiv();
    }
}
function reiniciar() {
    objPersonagem.personagem = "Escolher";
    objPersonagem.vivo = true;
    objPersonagem.tamanho = "pequeno";
    objPersonagem.poder = "nenhum";
    divUm.innerHTML = "Inserir personagem";
}