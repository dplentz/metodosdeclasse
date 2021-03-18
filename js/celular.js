class celular{
    constructor(){
        this.modelo;
        this.marca;
        this.bateria=0;
    }
    
    carregarBateria(quantidadedecarga){
        this.bateria += quantidadedecarga;
        if(this.bateria+quantidadedecarga>=100){
            this.bateria=100;
        }
    }

    usarApp(aplicativo){
        let consumo;
        switch (aplicativo) {
            case "whatsapp":
                consumo = 5;
                break;
            case "colheita feliz":
                consumo = 7;
                break;
            case "youtube":
                consumo = 15;
                break;
            case "outros":
                consumo = 6;
                break;        
            default:
                return false;
                break;
        }
        if(this.bateria-consumo<=1){
            return false;
        } else {
            this.bateria -= consumo;
            return true;
        }

    }

    retornarInfo(){
        let retorno;
        retorno =  "<br/>----Informações:----";
        retorno += "<br/> Marca = " + this.marca + "<br/> Modelo = " + this.modelo;
        retorno += "<br/> Bateria = " + this.bateria;
        return retorno;
    }

    exibirNaTela(){
        document.write(this.retornarInfo());
    }

    exibirNaDiv(div){
        div.innerHtml = this.retornarInfo();
    }


}