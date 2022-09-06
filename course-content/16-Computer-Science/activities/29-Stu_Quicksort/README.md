# 📐 Quick Sort

Work with a partner to add comments that describe the functionality of the code found in [Unsolved](./code-review).

1. Select an element from the array. This element is called the pivot. 
Choosing a pivot – we can choose one at random.

2. Next, begin sorting by iterating through the array. Rearrange the array's elements such that:

* Every element less than the pivot comes before it; and

* Every element greater than the pivot comes after it.

```This puts the pivot in the right place—i.e., this is where the pivot will appear when the array is finally sorted.

This process is called partitioning.

Taken independently, the elements to the left of the pivot comprise an array. The same is true for the elements to the right.
```

3. Repeat the above steps in each of the sub-arrays generated from partitioning.


```Since these sub-arrays get smaller with each iteration, we'll eventually try to sort arrays with one element.

Once we get here, we're done—the array is sorted.
```


---

## 📝 Notes

Refer to the documentation: 

[Quick Sort Visualized](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/)


Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.




