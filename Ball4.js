class Ball4{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,r,options);
        this.width = width;
        this.height = height;
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("orange");
        ellipse(200,500,100,100);
      }
    }
