// Create a function called lowercaseStrings that converts all strings in the stack to lowercase
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function lowercaseStrings(stack) {
  // your code here
  // tempstack
  let tempstack = new Stack()

  // convert to upper case and add to the temp stack
  while(!stack.isEmpty()){
    let element = stack.pop()
    element = element.toLowerCase()
    tempstack.push(element)
  }

  // return to the main stack
  while(!tempstack.isEmpty()){
    stack.push(tempstack.pop())
  }


}

// Create stack
const stack = new Stack();
stack.push("Hello");
stack.push("woRLd");
stack.push("good");
stack.push("MORNING");

lowercaseStrings(stack)
console.log(stack.printStack()) // ["hello", "world", "good", "morning"]