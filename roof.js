class roof{
    constructor(x, y) {
        var options = {
            'isStatic': true,
            density:2
            
        }
        this.body = Bodies.rectangle(x, y,1000,10,options);      
        World.add(world, this.body);
      } 
      display(){
       push();
       translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER);
        rect( 0,0,300,300 );
        pop();
       
      }
}