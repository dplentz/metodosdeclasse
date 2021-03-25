var objCelular = new celular();
function criarObjeto()
{
    objCelular.modelo = txtModelo.value;
    objCelular.marca = txtMarca.value;
    alert("celular criado com sucesso");
}

function exibir()
{     
    if (objCelular != null) {
        objCelular.exibirNaDiv(divUm);
    }
}

function carregarBat()
{
    let valor;
    valor = carga.value;
    valor = parseInt(valor);
    objCelular.carregarBateria(valor);
    objCelular.exibirNaDiv(divUm);
}

function usar()
{
    let nome;
    nome = app.value;
    objCelular.usarApp(nome); 
    objCelular.exibirNaDiv(divUm);
}