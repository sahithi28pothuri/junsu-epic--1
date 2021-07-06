class Playerbase{
    constructor(x,y,w,h){
        var opt={
            isStatic:true,
        };
        this.body=Bodies.rectangle(x,y,w,h,opt);
        this.w=w;
        this.h=h;
        this.image=loadImage("base1.png");
        World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.w,this.h);

      pop();
    }
}