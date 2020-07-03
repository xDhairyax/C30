class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility=255;
  }
display(){
  if(this.body.speed<3){
    super.display();
  }
  else {
    World.remove(world,this.body);
    this.Visibility=this.Visibility-10;
    push();
    tint(255,this.Visibility);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
  }
}
};