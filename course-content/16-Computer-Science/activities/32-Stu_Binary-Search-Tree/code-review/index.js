var Node = function(value){
  //each node will have a value
  this.value = 15;
  //each node may point to a right node that is greater then its own value
  this.right = null;
  //each node may point to a left nodethat is less then its own value
  this.left = null;
  //you might have other information in this node 
}


var BinarySearchTree = function(){
  //head node to the tree
  this.head = null;
  this.size = 0;
}

//adding a function for inserting a new node to the tree
//honestly it is not the focus of this lesson - but may prove interesting
BinarySearchTree.prototype.insert = function(value){
  //if there is no head already set (no nodes in the tree)
  if (this.head === null){
    // when the tree is empty
    this.head = new Node(value);
    //increment the size of the tree because we inserted our first value (node)
    this.size++;
  } //if there is a value in the head (There IS a node in the tree then create the function and call it)
  else {
    // when stuff (a root node) has already been inserted - function for find and insert
    var findAndInsert = function(currentNode){

    //if the value that we are inserting is greater then the current node then look right
      if (value > currentNode.value){
        //if we have reached a point where the limb is null then we can insert a new node (this can be called our base case)
        if (currentNode.right === null){
          currentNode.right = new Node(value);
        } else {
        //if the value of right branch is not null then we call on the function again passing the right node as an argument
          findAndInsert(currentNode.right);
        }
    //if the value that we are inserting is less then the current node then look left
      } else if (value < currentNode.value){
        //if we have reached a point where the limb is null then we can insert a new node (this can be called our base case)
        if (currentNode.left === null){
          currentNode.left = new Node(value);
        } else {
          //if the value of left branch is not null then we call on the function again passing the left node as an argument
          findAndInsert(currentNode.left);
        }
      }
    }
    //function called if there is a value in the head (There IS a node in the tree then create the function and call it)
    findAndInsert(this.head);
    //increment the size of the tree because we inserted a new value (node)
    this.size++;

  }
}

//adding a function to BinarySearchTree to do a search to be used for delete 
//function declaration inside of a prototype function!?! 
//Look at prototype-based inheritance
//honestly it is not the focus of this lesson - but may prove interesting

//Logarithmic O(log n)
BinarySearchTree.prototype.search = function(target){
  var check = false;
  //create a function for 
  var traverse = function(currentNode){
   
    //if check is set to true (our base case)
    if (check){
      return;
    } //if the node passed is null then return out (another base case)
    else if (currentNode === null){
      return;
    } else if (currentNode.value === target){ //we found it! Return out of function TRUE
      check = true;
      return;
    }
    //if none of the above conditions are met then evaluate the target and the curent nodes value and see if it is greater then the target
    // if it is move right and call the function again
    if (target > currentNode.value){
      traverse(currentNode.right);
    } //if it is less then then go left
    else if (target < currentNode.value){
      traverse(currentNode.left);
    }
  }
  //kick off the function traverse with a function call passing the head node as an arguament and examining the target
  traverse(this.head);
  return check;
}

  //function to delete (will call on search function) passed the value to delete
BinarySearchTree.prototype.delete = function(deleteValue){
  //a temp holding array to hold all nodes 
  var temp = [];

  // this function is used to round up all nodes in the tree except for the node to be deleted
  //yes - a linear O(n) operation - have to keep this tree balanced 
  var roundUp = function(currentNode){
    //base case to see if the node we have reached is null return out.
    if (currentNode === null){
      return;
    } else {
      //otherwise push the node object to the array
      if (currentNode.value !== deleteValue){
        temp.push(currentNode.value);
      }
    }
    //do so recursively for right and left until you reach the end for each - it will return up the stack. 
    roundUp(currentNode.right);
    roundUp(currentNode.left);
  }
  //start the round up function with the head
  roundUp(this.head);

  //if the new array holding all the nodes are the same size as the original Bi Tree then it was not found all values were pushed in
  // no values met the criteria of if (currentNode.value !== deleteValue)
  if (temp.length === this.size){
    console.log('deleteValue: ' + deleteValue + ' was not found in binary search tree');
    return;
  }

  // create temporary tree - YEP we create a new bianary search tree
  //indeed this goes through all existing nodes
  var tempTree = new BinarySearchTree();

  // iterate through all of the found values that weren't the target
  // and insert them into the new tree O(n)
  temp.forEach(function(value){
    tempTree.insert(value);
  })

  // reinitialize the head as the tempTree head
  this.head = tempTree.head;

  // reduce size of tree by one (the one we deleted)
  this.size--;
  
  console.log(deleteValue + ' has been deleted from the tree');
}

var sapling = new BinarySearchTree();

sapling.insert(100);
sapling.insert(50);
sapling.insert(150);
sapling.insert(200);
sapling.insert(125);
sapling.insert(75);
sapling.insert(25);
sapling.insert(30);
sapling.insert(20);

console.log(sapling.head)
sapling.delete(50);
console.log(sapling.head)


// Basic Delete Function - Track Parent and Deletes nodes 

// Delete 25
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 

//          15
//         /   \
//        10   27
//       / \   / 
//      7  13 22  
//     / \    / 
//    5   9   17  
//              
//             

// //function to delete (will call on search function) passed the value to delete
// BinarySearchTree.prototype.delete = function(deleteValue){
//   /**
//    * Replace the parent branch pointing to a child with a new child
//    * @param {Node} parent 
//    * @param {Node} originalChild 
//    * @param {Node} replacementChild 
//    */
//   const patchParentBranch = function(parent, originalChild, replacementChild) {
//     // if we're deleting the head node then assign replacementChild to head 
//     if (parent === null) {
//       this.head = replacementChild;
//       return;
//     }

//     // if the parent's left branch points to the original child then replace
//     // the left branch with the new child, else check for the condition for the
//     // right branch.  If neither option is valid then do nothing except complain
//     // loudly!
//     if (parent.left === originalChild) {
//       parent.left = replacementChild;
//     } else if (parent.right === originalChild) {
//       parent.right = replacementChild;
//     }
//     else {
//       console.log("patchParentBranch failed!")
//     }
//   }

//   /**
//    * delete a node from the tree
//    * @param {*} foundNode { parent: parentNode, child: childNode} 
//    */
//   var deleteNode = function(foundNode) {
//     let { parent, child } = foundNode;

//     if (child === null) {
//       console.log("Cannot delete an empty node!");
//     }
//     // if a child doesn't have two branches then it's like a linked list
//     // and just "link" the parent to the new child.[left,right] which 
//     // effectively deletes the original child
//     else if (child.right === null) {
//       patchParentBranch(parent,child,child.left);
//     }
//     else if (child.left === null) {
//       patchParentBranch(parent,child,child.right);
//     }
//     else {
//       // the child to delete has both branches filled!!!
//       // we know the largest element of the left subtree is less
//       // than the smallest (leftmost) element of the right subtree
//       // so..
//       // we go all the way to the leftmost node of the right subtree
//       let node;
//       for (node = child.right; node.left; node = node.left ) {}

//       // and attach the left subtree to the left-most branch (ie. smallest
//       // valued node) of the right tree 
//       node.left = child.left;

//       // now that child only has one valid branch since we assigned child.left
//       // child is now a link in a linked list so we can just delete the child
//       // by patching the parent.
//       patchParentBranch(parent, child, child.right);
//     }
//   };

//   /**
//    * recursive function to find a node with a particular value
//    * @param {number} value 
//    * @param {Node} parent 
//    * @param {Node} child 
//    * @return {object} - { parent: Node, child: Node }
//    */
//   var searchNode = function(value, parent, child) {
//     // terminating condition if child is null then return null
//     if (child === null) {
//       return null;
//     }

//     // terminating condition if value is found return object
//     // with information needed to delete the node
//     if (child.value === value) {
//       return {
//         parent,
//         child
//       };
//     }

//     // recurse to the left
//     let foundNode = searchNode(value, child, child.left);
//     if (foundNode !== null) {
//       return foundNode;      
//     }
//     // else recurse to the right if not found on the left
//     return searchNode(value, child, child.right);
//   };

//   // if we find the node then delete!
//   let foundNode = searchNode(deleteValue, null, this.head);
//   if (foundNode) {
//     deleteNode(foundNode);
//     console.log(deleteValue + ' has been deleted from the tree');
//   }
//   else {
//     console.log(deleteValue + ' not found in the tree');
//   }
// }
