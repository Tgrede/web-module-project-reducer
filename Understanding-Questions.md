# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
after the 1 button is pressed it sees the onClick = {clickHandler} and then reads the clickHandler function
clickHandler reads in our addOne function from the actions
addOne returns an object with a key of type and value of ADD_ONE
once returned this (because of the dispatch from our useReducer hook) will then be passed into the reducer which takes the ADD_ONE case
the ADD_ONE case adds 1 to the total in state
this then gets passed in and is used in total display

* TotalDisplay shows the total plus 1.
