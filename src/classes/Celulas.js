class Celula{
    
    enferma=false;
    
    x=0;
    y=0;

    posicion=0

    constructor(enferma,x,y,posicion){
        this.enferma=enferma;
        this.x=x;
        this.y=y;
        this.posicion=posicion;
    }
    //Se usan dos funciones para que el codigo quede más claro
    enfermar(){
        this.enferma=true;
    }
    
    sanar(){
        this.enferma=false;
    }

    obtenerVecinos(){
        //Se puede hacer con for pero tu me entiendes
        return  [
            {x:this.x-1,y:this.y+1},//Vecino 1
            {x:this.x-0,y:this.y+1},//Vecino 2
            {x:this.x+1,y:this.y+1},//Vecino 3

            {x:this.x-1,y:this.y+0},//Vecino 4

            {x:this.x+1,y:this.y+0},//Vecino 5

            {x:this.x-1,y:this.y-1},//Vecino 6
            {x:this.x-0,y:this.y-1},//Vecino 7
            {x:this.x+1,y:this.y-1},//Vecino 8
        ];
    }

    calcularPosicion(x,y,m){
        return x+m*y
    }

}

module.exports = Celula