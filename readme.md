# Algorithms and Data Structure Fundamentals


## Data Structure


### Hash table
With hash tables we define a hash to identify the items.

### Linked list
Is like an object that links other objects in a chain. It has a head object and a tail object.

### Stacks
Is a data structure based on LIFO (Last In First Out). Is used for JS execution context in the functions. The first item inserted into the stack is the last item to go out.

### Queue
is the opposite of stack FIFO (First in First Out). It means that the first item inserted is the first item to go out. Queues are used in web services and databases to manage the requests.

### Trees
Is a hierarchical data structure defined as a collection of nodes. It has root, parent, and childs nodes. The HTML and XML tags are based on tree data structure.

### Graph
Is a non-linear data structure consisting of nodes and edges. Graph can be:

- Directed / Undirected
- Weighted / Unweighted
- Cyclic / Acyclic


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
    return aVeryBigSum(ar);
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