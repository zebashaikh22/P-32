class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible = 45;
        World.add(world, this.body);
      }
      display(){
         if(this.body.speed < 2.5){
         
         }
         else {
         World.remove(world, this.body);
         this.visible -=1;
         push();
         tint(255, this.visible);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
        }

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
     }
}
  