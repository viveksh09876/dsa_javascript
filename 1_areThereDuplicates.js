/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
 */


/**
* Approach 1: using frequency counter hashmap
* Time: O(N)
* Space: O(N)
*/
function areThereDuplicates() {
  let arr = [...arguments], hashMap = {};
  //edge cases
  if (arr.length <= 1) {
    return false;
  }
  
  

  //loop over arguments and create hashmap, 
  //if hashmap key already exist then return true else return false

  for (let item in arr) {
    if (hashMap[arr[item]]) {
      return true;
    } else {
      hashMap[arr[item]] = 1;
    }
  } 

  return false;
}

/**
* Approach 2: using multiple pointers
* Time: O(NlogN)
* Space: O(1)
*/
function areThereDuplicates(...args) {

  //edge cases
  if (args.length <= 1) {
    return false;
  }

  args.sort();

  let i = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
      args[i] = args[j];
    }
  }

  return false;
}