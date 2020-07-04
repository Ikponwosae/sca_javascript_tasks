 /*WHAT THE CAT DOES :
 instance properties:
 -tiredness
 -hunger
 -loneliness
 -happiness

 instance methods:
 -feed if tiredness is above 50%
 -sleep
 -pet
*/


let cat = {
	name: 'happy-cat',
	tiredness: 50,
	hunger:50,
	loneliness:50,
	happiness: false,
	feed: function (less, moree) {
		let hungry = this.hunger + moree;
		let notHungry = this.hunger - less;
		if(hungry > notHungry){
			this.hunger = hungry;
		}
		else{
			this.hunger = notHungry;
		}
	},
	sleep: function(less, moree) {
		let tired = this.tiredness + moree;
		let notTired = this.tiredness - less;
		if(tired > notTired){
			this.tiredness = tired;
		}
		else{
			this.tiredness = notTired;
		}
	},
	pet: function() {
		if(this.tiredness < 50 && this.hunger > 50 && this.loneliness > 10) {
			this.happiness = true;
			console.log('meow meow!');
		}
		if(this.tiredness > 60 || this.hunger > 60 || this.loneliness > 10) {
			this.happiness = false;
			console.log('growl!');
		}
	},
	feelings: function() {
		if(this.hunger >= 60){
			console.log(this.name + ' is grumpy and  hungry! She needs to be fed.');
		}

		if(this.hunger <= 50) {
			console.log(this.name + ' is not hungry right now.');
		}

		if(this.tiredness >= 60) {
			console.log(this.name + ' is itchy and tired! She needs to sleep.');
		}
		if(this.tiredness <= 50) {
			console.log(this.name + ' is not tired, give her her toys and do not pet her.');
	}
	this.pet();
}
};

cat.feed(30,20);
cat.sleep(10,0);
cat.feelings();
