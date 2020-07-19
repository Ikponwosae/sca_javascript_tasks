## JS Closure Exercises (MVP)

1. In your own terms, define what a Closure is in Javascript.

A closure is a system that allows inner/nested functions to access/remember variables declared outside their scope even after the parent/outer function has been executed either by returning the inner function or passing it into another function.

2. What is result? 

There's a type error because firstResult is not a function, making it undefined.


```
var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction();
}

var firstResult = someFunction(9);
var result = firstResult(2);

```

3. What will you see in the console for the following example? Explain Why.

The console prints out a as 1 because it is declared and initialized as 1 in the global scope even though it is re-assigned in the    function b() which does not return any value.


```
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

```
