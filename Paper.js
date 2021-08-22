class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,restitution:0.3,density:1.2			
			}
        this.r = r*2+45
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);
         this.image = loadImage("paper.png")

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}