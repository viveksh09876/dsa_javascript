/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

//Approach 1 
//Time: O(N)
//Space: O(N)
function countUniqueValues(arr) {
	if (arr.length <= 1) {
		return arr.length
	}

	let hashMap = {}, uniques = 0;
	//loop over array and store numbers as key and occurrences as value in hashmap
	for (let val in arr) {
		if (!hashMap[arr[val]]) {
            		hashMap[arr[val]] = 1;
			uniques += 1;
		}
	}
	return uniques

}

//Approach 1 
//Time: O(N)
//Space: O(1)
/**
  i
 [1,2,3,3,4,4]
    j

    i
 [2,2,3,3,4,4]
      j

      i
 [2,3,3,3,4,4]
        j

      i
 [2,3,3,3,4,4]
          j

        i
 [2,3,4,3,4,4]
            j	
*/
function countUniqueValues1(arr) {
	if (arr.length <= 1) {
		return arr.length
	}

	let i = 0;
    	for (let j = 1; j < arr.length; j++) {
        	if (arr[i] != arr[j]) {
            		i++;
            		arr[i] = arr[j];
        	}
    	}
	
	return i+1;
}

