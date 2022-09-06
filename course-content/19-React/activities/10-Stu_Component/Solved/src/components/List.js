import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// function List(props) {
//   // Using the filter method, we can create a new array containing only groceries which haven't been purchased
//   const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

//   // const notPurchased = props.groceries.filter(function(grocery){
//   //   return !grocery.purchased
//   // };


//   return (
//     <ul className="list-group">
//       {notPurchased.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }



export default List;
