/*
Can you solve with a for loop like Friday? How about with recursion?  

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.



Hint:  https://www.youtube.com/watch?v=zg-ddPbzcKM

From: https://leetcode.com/problems/fibonacci-number/


*/
// trying to write a recursive solution

function fib(n){
  let arr = [0,1]   
  let prev2 = arr[arr.length-2]
  let prev1 = arr[arr.length-1]
  let next = (prev1 + prev2)
  console.log(arr)   
  if(arr.length<n){ 
    return fib(arr)
  } else{
    fib(n-1)
  }
}

console.log(fib(6), '=> 8')
// console.log(fib(5), '=> 5')
// console.log(fib(4), '=> 3')
// console.log(fib(3), '=> 2')
// console.log(fib(2), '=> 1')
// console.log(fib(0), '=> 0')