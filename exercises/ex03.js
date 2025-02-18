// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeDuplicates(stack) {
  // your code here
  // temp stack
  let tempstack = new Stack()


  while(!stack.isEmpty()){

    let element = stack.pop()

    tempstack.isEmpty() ? tempstack.push(element) : ""

    if(!tempstack.isEmpty() && (tempstack.printStack().includes(element) == false)){
      tempstack.push(element)
    }

  }

  while(!tempstack.isEmpty()){
    stack.push(tempstack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack)
console.log(stack.printStack()) // [2, 5, 1, 3]