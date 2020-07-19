## Synchronous & Asynchronous Javascript (MVP)

1. What are promises and how they are useful?

 Promises simplify deferred asynchronous computations and represent operations that haven't been completed yet. They are simpler versions of callbacks.

2. What is the difference between synchronous and asynchronous code in JavaScript?

In synchronous code, things happen at a time i.e if you have two lines of code, the second line cannot begin running until the first has finished executing while in asychronous code, multiple things happen at a time i.e the first line of code which is is taking some time to finish or is scheduled to be run in the future is being executed in the background and in parallel the execution of the second line is continued.

3. Write out any sample syncronous and asyncronous javascript code

`SYNCHRONOUS CODE`
```
console.log('loading...');
console.log('..1..2..');
console.log('fetching data...');
console.log('process complete.');

loading...
..1..2..
fetching data...
process complete.
```
`ASYNCHRONOUS CODE`
```
let jamsAreSweet = true;
 function theJamPromised() {
     return new Promise((resolve, reject) => {
         if(jamsAreSweet) {
             resolve('always true!');
         }
         else{
             reject('why lie!');
         }
     });

 }

 theJamPromised().then((message) => {
     console.log('This ' + message);
 }).catch((message) => {
     console.log('I don\'t like :/ ' + message);
 });



 This always true!
```

4. List the different ways to deal with Asynchronous Code?

-using asynchronous function library e.g async.js

-using promises

-using async/await

-using callbacks
