var objPersonagem = new mario();
function criarObj() 
{
    objPersonagem = personagem.value;
    alert("obj criado");
}
function exibir()
{   if(objPersonagem!=null){
        objPersonagem.exibirNaDiv();
    alert("aa");
    } 
    else
    {
        alert("merda");
    }
}
function poder()
{
    let obj;
    obj = txtPoderes.value;
    pegarItem(obj);
}
function luta()
{

}