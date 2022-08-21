# Algorithms and Data Structure Fundamentals


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Big-O

[Click Here](https://www.bigocheatsheet.com/)

- O(1) Constant- no loops
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear- for loops, while loops through n items
- O(n log(n)) Log Liniear- usually sorting operations
- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential- recursive algorithms that solves a problem of size N
- O(n!) Factorial- you are adding a loop for every element

### What can cause time in a function?-

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### Rule Book

- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
  - for steps in order
  - for nested steps
- Rule 4: Drop Non-dominant terms

### What causes Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations

![alt Big-O CheatSheet](https://ih1.redbubble.net/image.256104184.9408/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg)


## Data Structure

### Hash table
With hash tables we define a hash to identify the items. This data structure is recommender for counter algorithms.

` let hash = { key: value}; `

### Linked list
Is like an object that links other objects in a chain. It has a head object and a tail object.

### Stacks
Is a data structure based on LIFO (Last In First Out). Is used for JS execution context in the functions. The first item inserted into the stack is the last item to go out.

### Queue
is the opposite of stack FIFO (First in First Out). It means that the first item inserted is the first item to go out. Queues are used in web services and databases to manage the requests.

### Trees
Is a hierarchical data structure defined as a collection of nodes. It has root, parent, and childs nodes. The HTML and XML tags are based on tree data structure.

### Graph
Graphs is a non-linear data structure consisting in the relationship between edges and nodes. With graphs we can use to representa networks, routes of maps, etc.

Graph can be:

- Directed / Undirected
- Weighted / Unweighted
- Cyclic / Acyclic
  

#### Types of graphs

##### Directed / Undirected

- Directed: is when the connections has specifics directions.

- Undirected: is when the connection do not specify directions.

##### Weighted / Unweighted 

- Weighted: is when the edges has some informations the graphs is weighted. For example: google maps 
 has durations and distances on their routes.

- Unweighted: is when the edges doesn’t has información.

##### Cyclic / Acyclic

- Cyclic: is when the nodes connections has a circular addressing. 

- Acyclic: is when the dirección of nodes connection do not make any repetition. 


## Algorithms

### Recursion

A recursive algorithm calls itself with smaller input values and returns the result for the current input by carrying out basic operations on the returned value for the smaller input.

```
let sumcount = 0, sum = 0;
function aVeryBigSum(ar) {
    //Write your code here
    if(sumcount > ar.length){
        return sum
    }
  
    if(ar[sumcount] != undefined)
      sum = sum + ar[sumcount];
    sumcount++
    return aVeryBigSum(ar);  // O(2^n) Exponential
}
```

### Sort

#### Bubble

Simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order

```
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

// Space Complexity O(n)
// Time Complexity O(n^2)

```

#### Selection

Is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

```
function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    //set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

```

#### Insertion

is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

```
function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}
```

#### Quicksort

The QuickSort algorithm is based on the "divide and conquer" technique whereby in each recursion, the problem is divided into smaller subproblems and they are solved separately (applying the same technique) to be joined again once solved.

```
function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
```

#### Merge Sort

The merge sort is one of the more advanced sorting algorithms that’s quite efficient in sorting large amounts of data. The algorithm uses the recursive function concept with divide and conquer strategy to efficiently sort a given list of elements.

```
function merge(left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
}
```


### Search

#### Lineal Search

In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

```
var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
  return item === 'Godzilla';
});

beasts.find(function(item){
  return item === 'Godzilla';
})

beasts.includes('Godzilla')
```

#### Binary Search

Is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

```
let recursiveFunction = function (arr, x) {
      
    const start = 0;
    const end = arr.length;
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}
```

### Dynamic Programming

#### Memoization
Memoization is the top-down approach to solving a problem with dynamic programming. It's called memoization because we will create a memo, or a “note to self”, for the values returned from solving each problem.

```
function addTo80(num) {
   return num + 80;
}

let cache = {};
function memoizedAddTo80(num) {
  if (num in cache) {
    return cache[num]; 
  } else {
    console.log('Calculating...');
    cache[num] = num + 80;
    return cache[num];
  }
}

// Computes and stores 85 in cache
console.log(memoizedAddTo80(5));

// Returns memoized data from memory
console.log(memoizedAddTo80(5));

// Returns memoized data from memory
console.log(memoizedAddTo80(5));

// Output:
Calculating...
85
85
85

```

To see more topics clic [here](./ProgrammingConcepts/readme.md)