/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

**/


function sameFrequency(a,b) {

if (!a || !b) {
  return false;
}

if (!a && !b) {
  return true;
}

//convert digits to string
let str1 = a.toString(), str2 = b.toString(), hashMap = {};


//edge cases
if (str1.length != str2.length) {
  return false;
}

//loop 'a' and create hashmap with letters in string 'a'

for (let ch in str1) {
  if (!hashMap[str1[ch]]) {
    hashMap[str1[ch]] = 1;
  } else {
    hashMap[str1[ch]] += 1;
  }
}

//loop over string 'b' and check if letter is present in hashmap

for (let ch in str2) {
  if (!hashMap[str2[ch]]) {
    return false;
  } else {
    hashMap[str2[ch]] -= 1;
  }
}

return true;
}