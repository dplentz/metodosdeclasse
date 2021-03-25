class mario
{
    
    constructor()
    {
        this.personagem = "escolha";
        this.vivo = true;
        this.tamanho = "pequeno";
        this.poder = "nenhum";
    }

    retornarInfo(){
        let retorno;
            retorno = "<br/>----- Info ----- <br/>"
            retorno += " Personagem: " + this.personagem;
            retorno += "<br/> Vivo? " + this.vivo;
            retorno += "<br/> Tamanho: " + this.tamanho;
            retorno += "<br/> Poder: " + this.poder;
            return retorno;
    }

    exibirNaDiv(){
        divUm.innerHTML = this.retornarInfo();
    }

    pegarItem(item){
        switch (item) {
            case "cogumelo":
                this.tamanho = "grande";
                break;
            case "pena":
                this.tamanho = "grande";
                this.poder = "voar";
                break;
            case "flor":
                this.tamanho = "grande";
                this.poder = "queimar";
                break;
            default:
                return false;
                break;
        }
    }

    serAtacado(){
        let vivo;
        
            if(this.tamanho == "grande" || this.poder != "nenhum"){
                vivo = "vivo";
                this.poder = "nenhum";
                this.tamanho = "pequeno";
            
            } else{
                this.vivo = false;
                vivo = "morto";
            }
            return vivo;
    }

}