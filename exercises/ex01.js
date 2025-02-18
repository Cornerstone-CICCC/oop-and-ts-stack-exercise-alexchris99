// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeEvenNums(stack) {
  // your code here
  // tempstack
  let temStack = new Stack()

  // delete the even numbers
  while(!stack.isEmpty()){
    let element = stack.pop()
    // evaluate if is even or not
    element % 2 == 0 ? "" : temStack.push(element) 
  }
  
  while(!temStack.isEmpty()){
    stack.push(temStack.pop())
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(3);
stack.push(6);

removeEvenNums(stack)
console.log(stack.printStack()) // [5, 1, 3]