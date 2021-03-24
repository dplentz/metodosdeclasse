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
        alert("Deu certo");
    } else{
        alert("Deu errado");
    }   
}

function carregarBat()
{
    let valor;
    valor = carga.value;
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