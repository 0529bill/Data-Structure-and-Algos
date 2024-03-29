## Leetcode cheat sheet

### string/array

- edge cases: empty string/array, duplicate string/array

- use two pointer (next one minus current one should be 1) for consecutive sequence problem

### linked list

1. use two pointer

- circular linked list problem => turtle and rabbit two pointer
- remove kth node for the linked list => two pointer

### palindrome

- no other character in the string => reverse then compare
- remove other character and check if it's a palindrome => two pointer, one from the beginning and one from the end

### substring

- Longest Substring Without Repeating Characters => calculate substring using Set, if encounter same value, delete value in Set in the order of the characters.

```js
//cdvdf

c set [c]
d set [c,d]
v set[c,d,v]
d delete values inside set =>  set[c,d,v] =>  set[d,v] => set[v] add current character back => [v,d]
f set[v,d,f]
```

### Search

- use binary search if the problem asked for O(logN) solution.
- use binary search for sorted array.
- use two pointers to implement binary search. ex, leetcode 704

## stack and queue

- Valid Parentheses problem(20) => use stack to copy the first part of the array then pop it, if it's not the same as the second part, it's not a valid Parentheses

## Binary Tree

- edge case: empty tree, null node

- BFS (use queue for iterative approach)
- DFS (use stack for iterative approach)

- merged two binary trees => use DFS to traverse both trees, change trees in place.
