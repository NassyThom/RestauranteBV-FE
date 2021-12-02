import { DecimalPipe, formatNumber } from "@angular/common";

export class Platillo {
    public id:string;
    public nombre:string;
    public precio:number;
    public peso:number;
    public caloria:number;
    public ingredientes:Ingredientes[];

    constructor(){
        this.id="";
        this.nombre="";
        this.precio=0;
        this.peso=0;
        this.caloria=0;
        this.ingredientes=[];
    }
}
export class Ingredientes{
   public id:string;
    public nombre:string;
    
    constructor() {
        this.id="",
        this.nombre=""
    }
}