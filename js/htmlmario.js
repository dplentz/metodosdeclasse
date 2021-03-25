var objPersonagem = new mario(); 
function criarObj() 
{
    objPersonagem.personagem = nome.value;
    
    }

function exibir()
{
    if(objPersonagem!=null){
        objPersonagem.exibirNaDiv();
    } 
    else
    {
        alert("Não possui objeto");
    }
}
function poder()
{
    let obj;
    obj = txtPoderes.value;
    objPersonagem.pegarItem(obj);
    objPersonagem.exibirNaDiv();
}
function luta()
{
    objPersonagem.serAtacado();
    objPersonagem.exibirNaDiv();
}