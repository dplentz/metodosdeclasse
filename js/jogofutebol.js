class jogofutebol{

    constructor(){
        this.time1;
        this.time2;
        this.golsTime1 = 0;
        this.golsTime2 = 0 ;
    }
    
    marcarGol(nomedotime){
        if(nomedotime == this.time1){
            this.golsTime1 += 1;
        } else if(nomedotime == this.time2){
            this.golsTime2 += 1;
        } else{
            return false;
        }
    }

    retornarInfo(){
        let placa;
        placa = "<br/>****Placar****"
        placa += "<br/> "+this.time1+" "+this.golsTime1+" x " +this.golsTime2+" " +this.time2;
        return placa;    
    }

    mostrarPlacar(){
        divUm.innerHTML = this.retornarInfo();
    }
}