
const numbers = document.querySelectorAll('[data-number]');

 const operations = document.querySelectorAll('[data-operation]');

 const trigs = document.querySelectorAll('[data-trig]');

 const equalTo = document.querySelector('[data-equals]');

 const deleteValue = document.querySelector('[data-delete]');

 const clearAll = document.querySelector('[data-all-clear]');

 const firstValueTextElement = document.getElementById('theInput');




 class Calculator{
 	constructor(firstValueTextElement) {
    	this.firstValueTextElement = firstValueTextElement;
 	}

 	clickNumber(number) {
 		this.firstValueTextElement.value = this.firstValueTextElement.value + number;
 	}

    clickOperation(operation) {
      this.firstValueTextElement.value = this.firstValueTextElement.value + operation;
    }

    clickEquals() {
    	this.firstValueTextElement.value = eval(this.firstValueTextElement.value);
    }

    trigPicked(trig) {
    	this.trig = trig;
    }


    trigse() {
    	let answer;
      const nowN = parseFloat(this.firstValueTextElement.value);

       switch(this.trig) {
       	case 'SIN': 
          answer = Math.sin(nowN * Math.PI/180.0);
          break;
        case 'COS': 
          answer = Math.cos(nowN * Math.PI/180.0);
          break;
        case 'TAN': 
          answer = Math.tan(nowN * Math.PI/180.0);
          break;
        default: 
           return;
       }
       this.firstValueTextElement.value = answer;
    }

    delete() {
    	const run = this.firstValueTextElement.value.toString();
    	this.firstValueTextElement.value = run.slice(0, -1);
    }

    clears() {
    	this.firstValueTextElement.value = '';
    }

 
 }


 const calculator = new Calculator(firstValueTextElement);

 numbers.forEach(button => {
 	button.addEventListener('click', () => {
       calculator.clickNumber(button.innerText);
 	});
 }); 

 operations.forEach(button => {
 	button.addEventListener('click', () => {
       calculator.clickOperation(button.innerText);
 	});
 }); 

 equalTo.addEventListener('click', () => {
    calculator.clickEquals();
 });
 

 trigs.forEach(button => {
 	button.addEventListener('click', () => {
 	   calculator.trigPicked(button.innerText);
       calculator.trigse();
 	});
 }); 

 deleteValue.addEventListener('click', () => {
 	calculator.delete();
 });

 clearAll.addEventListener('click', () => {
 	calculator.clears();
 });
 
 