class Bird extends Baseclass {
    constructor(x, y) {
     //To transfer all the properties from the base to the sub class
      super(x, y, 50, 50);
      this.image = loadImage("sprites/bird.png");
    };

    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

      super.display();
  
    };
  };
  