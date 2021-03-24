function criarObjeto()
{
    var objCelular = new celular();
    objCelular.modelo = txtModelo.value;
    objCelular.marca = txtMarca.value;
    alert("celular criado com sucesso");
}

function exibir()
{
    objCelular.exibirNaDiv(divUm);
}