// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {

 	constructor(length, width, height){

        this.length = length;
        this.width = width;
        this.height = height;
       }


    cVolume () { 
	return this.length * this.width * this.height;
};

    sArea () { 
	return 2 * ((this.length * this.width )+ (this.length * this.height) + (this.width * this.height));
};

}
 // const 
  var cuboid = new CuboidMaker(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.cVolume()); 
console.log(cuboid.sArea()); 