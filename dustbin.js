class Dustbin {
  constructor(x,y){
    var options={isStatic:true}
    this.bottomBody=Bodies.rectangle(x,y,100,10,options)
    this.leftBody=Bodies.rectangle(x-45,y,10,100,options)
    this.rightBody=Bodies.rectangle(x+45,y,10,100,options)
    World.add(world,this.bottomBody)
    World.add(world,this.leftBody)
    World.add(world,this.rightBody)

this.image=loadImage('dustbin.png')


  }
  
  display(){
    var positionBottom=this.bottomBody.position
    push()
    translate(positionBottom.x,positionBottom.y)
    
    imageMode(CENTER)
    image(this.image,0,0,100,100)
    pop()

    var positionLeft=this.leftBody.position
    push()
    translate(positionLeft.x,positionLeft.y)
    rectMode(CENTER)
   // rect(0,0,10,100)
    pop()

    var positionRight=this.rightBody.position
    push()
    translate(positionRight.x,positionRight.y)
  
   rectMode(CENTER)
   // rect(0,0,10,100)
    pop()
  }
}
