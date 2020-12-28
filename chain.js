class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 300

        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        //this.sling1.scale=0.7
        World.add(world, this.chain);

    }

   
    display(){     
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke("black")
            line(pointB.x,pointB.y,pointA.x,pointA.y);
         pop();
        }
        
    }
    
}

/*class Chain{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.2,
          length:200
      }
      this.pointB=pointB
      //this.chain=constraint.create(options)
      this.chain = Constraint.create(options);
 
      World.add(world,this.chain)
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke("black")
            line(pointB.x,pointB.y,pointA.x,pointA.y);
         pop();
        }
        
    }
}*/
