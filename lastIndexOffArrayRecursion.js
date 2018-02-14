/*
* Warm up: using no loops (for, while, etc.), and no global variables, write a function that returns the sum of a list:
* sum([1, 2, 3, 4, 5]) -> 15
* sum([]) -> 0
*/
function sum (list) {
  if (list.length == 0) return 0
  else {
    var head = list.shift();
    return head + sum(list);
  }
}


/*
* Again, using no loops, no global variables, and no helper functions, write a function that returns
* the last index of a given input in a list. (Counting the number of times you've called your function
* is considered cheating.)
*
* lastIndexOf(5, [1, 2, 4, 6, 5, 2, 7]) -> 4
* lastIndexOf(5, [1, 2, 4, 6, 2, 7]) -> -1
* lastIndexOf(5, [1, 2, 5, 4, 6, 5, 2, 7]) -> 5
*/

function lastIndexOf(el, list) {
  function lastFound(el, list, curIndex, foundIndex) {
    if (list.length === 0) return foundIndex;
    else {
      var head = list.shift();
      if (head === el) return lastFound(el, list, curIndex + 1, curIndex);
      else return lastFound(el, list, curIndex + 1, foundIndex);
    }
  }
    
  return lastFound(el, list, 0, -1);
}

/*
* Bonus round: implement reduce.
*/
