// Ques 1. String Reversal: Write a function to reverse a given string in JavaScript without using built-in reverse functions.

// function reverseString(str){
//     let reverseStr = '';
//     for(let i = str.length-1; i >= 0; i--){
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// console.log(reverseString("Hello"));


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Ques 2. Anagram Check: Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)

// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const charCount = {};

//     for (let char of str1) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         if (!charCount[char]) {
//             return false; 
//         }
//         charCount[char]--;
//     }

//     for (let key in charCount) {
//         if (charCount[key] !== 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let string1 = 'listen';
// let string2 = 'silent';
// console.log(areAnagrams(string1, string2));

// string1 = 'hello';
// string2 = 'world';
// console.log(areAnagrams(string1, string2));



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Ques 3. Array Intersection: Given two arrays, write a function to find their intersection (common elements).

// function intersection(arr1, arr2){

//     for(let i = 0; i < arr1.length; i++){
//         let elem = arr1[i];
//         for(let j = 0; j < arr2.length; j++){
//             if(elem == arr2[j]){
//                 console.log(elem);
//             }
//         }
//     }
  
//     return 0;
// }

// intersection([1, 2, 46, 29, 0, 56], [33, 20, 29, 0, 2]);


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Ques 4. String Palindrome: Create a function to check if a given string is a palindrome (reads the same forwards and backwards) while ignoring non-alphanumeric characters.

// function isAlpha(char){
//     if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char >= 0 && char <= 9){
//         return true;
//     }else{
//         return false
//     }
// }

// function palindrome(str){
//     let i = 0, j = str.length-1;
//     while(i <= j){
//         let char1 = str[i];
//         let char2 = str[j]
//         if(!isAlpha(char1)){
//             i++;
//         }else if(!isAlpha(char2)){
//             j--;
//         }else{
//             if(char1 != char2){
//                 return false;
//             }
//             i++;
//             j--;
//         }
//     }
//     return true;
// }

// console.log(palindrome("ra r r ar"));



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Ques 5. Array Rotation: Implement a function to rotate an array to the right by a specified number of positions.

// function rotateArray(arr, k) {
//     let n = arr.length;
    
//     k = k % n;

//     for (let i = 0; i < k; i++) {
//         let lastElement = arr.pop();
//         arr.unshift(lastElement);
//     }

//     return arr;
// }

// let array = [1, 2, 3, 4, 5];
// let k = 2;
// console.log(rotateArray(array, k));

// k = 3;
// console.log(rotateArray(array, k));



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Ques 6. Array Sum: Write an algorithm to find the pair of elements in an array that adds up to a specific target sum.

function findPairWithSum(arr, targetSum) {
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === targetSum) {
            return [arr[left], arr[right]];
        }
        if (currentSum < targetSum) {
            left++;
        }
        else {
            right--;
        }
    }

    return null;
}

let array = [2, 7, 11, 15];
let targetSum = 9;
console.log(findPairWithSum(array, targetSum));

array = [1, 4, 5, 6, 8];
targetSum = 10;
console.log(findPairWithSum(array, targetSum)); 
