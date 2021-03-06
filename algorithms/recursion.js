// Recursion really isn't an algorithm. It's more of a concept.
// Recursion is when something is defined within itself.
// A recursive function, for example is a function that calls itself.
let counter = 0;

const recursive1 = () => {
	if (counter >= 5){
		return 'done!'
	}
	counter++
	console.log('hey!' + counter)
	return recursive1()
}

console.log(recursive1())

// recursive as the name suggests is a recursive function because it's going to call itself.
// Recursion is useful for tasks with repeated tasks to do.
// Recursion is important because it's used in searching and sorting algorithms.

// stack overflow
// Recursion has two main problems. Could be initially hard to grasp

// Stack overflow
// A stack overflow occurs when the call stack is overloaded
// The recursive function adds data to the stack as the function is being called. Since this runs infinitely as the function will continue calling itself till the memory allocated for the stack is exceeded and a stack overflow occurs

// Stack overflows are one of the biggest problems with recursion

// The computer needs to allocate memeory to remember the function being called.

// Every recursive function needs to have a base case
// The function stops calling itself if the conditions in the base case is met.In the case of the recursive function above, it's when the counter is > or = 5. Once that condition is met, the function stops running.

// There's usually a base case that should have a return statement so that the value wanted will be bubbled up to the top of the stack.

// 1: Identify the base case
// 2: identify the recursive case
// 3: Get closer and closer and return when needed. Uusally 2 returns for the base case and the recursive case.

// Recursion vs Iterative approach
// Anything that can be implemented recursively can also be done iteratively with a loop

// There are times where recursion can keep code DRY
// Recursion is usually not always the best approach

// Pros:
// DRY
// Readabilty

// Cons
// Large stack

// Iterative approaches might be less readable bit more efficient
// They dont require creating more function calls on the call stack.

// Recursdon is best used when working with data structures with unknown depth.
// Recursion is useful with tree data structures and traversal.

// Tail call optimization can allow recursive functions to be written without increasing the call stack
// https://2ality.com/2015/06/tail-call-optimization.html

// When to use recursiom:
// Recursion is useful when dealing with complicated problems like traversing through trees or graphs like DFS nd BFS

// When using a tree or converting to a tree, consider recursion
// Recursion makes tasks easier.

// Divide and conquer using recursion.