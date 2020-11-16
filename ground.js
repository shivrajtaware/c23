class Ground{
    constructor(x,y,width,height){
        var optiong={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,optiong);
        this.height = height;
        this.width=width;
        World.add(world,this.body);
    }
    grounddisplay(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.heigth);
    }






}