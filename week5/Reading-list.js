/*HOW THE BOOK LIST OBJECT FUNCTIONS:
instance properties:
-marked as read
-not read 
-reference to next book object 
-reference to last book object 
-array of all book Objects 
-
instance methods:
-add book or book object from book class to book list or array property

HOW THE BOOK OBJECT FUNCTIONS:
instance properties:
-title
-read date
-read true or false
-genre
-author
-
instance methods:
-
the two classes are to interact with one another.
*/

class Book {
	constructor(titles, genre, author, yesRead, readate) {
		this.titles = titles;
		this.genre = genre;
		this.author = author;
		this.yesRead = yesRead;
		this.readate = readate;
	}
}

let Book1 = new Book('book-name', 'music', 'adele', true, new Date());
let Book2 = new Book('wallflower', 'fiction', 'wachowski', false, '');
let Book3 = new Book('walls', 'fiction', 'wacho', false, new Date());



class BookList  extends Book {
	constructor(yesRead, hasRead, notRead, nextRead, lastRead, allBooks) {
		super(yesRead); 
		this.hasRead = hasRead;
		this.notRead = notRead;
		this.nextRead = nextRead;
		this.lastRead = lastRead;
		this.allBooks = [];
	}

opensBook() {
	//number of books marked as read
	this.hasRead = 0;
	let jam = this.hasRead;
	function yesFunc(object,index,array){

	let count = 0;
   	let l = object.yesRead;

   	if(l == true){
   		count ++;
   	}

   	jam += count;
   }
   this.allBooks.forEach(yesFunc);
   return this.hasRead = jam;
  //console.log(jam);
}

closesBook() {
	//number of books marked as not read
	this.notRead = 0;
	let jam = this.notRead;
	function yesFunc(object,index,array){

	let count = 0;
   	let mat = object.yesRead;

   	if(mat == false){
   		count ++;
   	}

   	jam += count;
   }
   this.allBooks.forEach(yesFunc);
   return this.notRead = jam;
  //console.log(jam);
}

readsNext() {
// checks if the array element object have a read value of false and returns the 
//index of the first to pass that test.
	function nextfunc(object,index,array) {
		let ans = object.yesRead;
		return ans == false;
	}
return this.nextRead = this.allBooks.findIndex(nextfunc);
}

readLast() {
	//checks the first object element in the array that has a yesRead value of true.
	function lastfunc(object,index,array) {
		let anss = object.yesRead;
		 return anss == true;
		 
	}
return this.lastRead = this.allBooks.findIndex(lastfunc);
}

finishCurrentBook() {
	function finFunc(object,index,array) {
		let dat = object.readate;
		let att = object.yesRead;
		if(dat  == '') {
		    return object.readate = Date.now;
		}
	}
	this.allBooks.find(finFunc);
}

addBooks(book) { //adds book to current book list or array
	//this.allBooks = [];
	this.allBooks.unshift(book);
	return this;
}

}

let bokks = new BookList();



bokks.addBooks(Book1).addBooks(Book2).addBooks(Book3);
console.log(bokks.allBooks);
bokks.opensBook();
console.log('number of books read ', bokks.hasRead);
bokks.closesBook();
console.log('number of books not read ', bokks.notRead);
bokks.readsNext();
console.log('the index of the next book to read is ', bokks.nextRead);
bokks.readLast();
console.log('the index of the last book read is ', bokks.lastRead);