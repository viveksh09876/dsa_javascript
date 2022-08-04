/**
 * Given two strings, write a function to determine if second string is anagram of first string. An anagram is word, phrase, or name formed by re-arranging the letters of other, such as cinema formed from iceman.
 */

 //Appraoch 1 - nested loop or indexOf - O(N*N)
 //Time: O(N*N)
 //Space: O(1)
function anagram1(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    //create nested loop to compare each letter of first string to each letter of second string
    //if letter is found in second string then remove that letter from second string
    for (let i=0; i<str1.length; i++) {
        const index = str2.indexOf(str1[i])
        if (index === -1) {
            return false
        } else {
            str2 = str2.substring(0, index) + str2.substring(index+1);
        }
    }
    return true
}

console.log(anagram1('aaz', 'aza'));

//Appraoch 2 - create hashmap with letter as key & number of occurence as val 
//Time: O(N)
//Space: O(N)
function anagram2(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let strMap1 = {}

    //loop over string 1 to create hashmap
    for (let val in str1) {
        if (!strMap1[str1[val]]) {
            strMap1[str1[val]] = 1
        } else {
            strMap1[str1[val]] += 1
        }
    }
    //loop over string 2 and check if key is present in hashmap
    for (let val in str2) {
        if (!strMap1[str2[val]]) {
            return false
        }
    }
    return true
}

console.log(anagram2('aaz', 'aza'));

