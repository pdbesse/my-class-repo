import React from 'react';

// We are applying some styles -- but instead of importing a .css file directly into the component, we declare a styles object.
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
//🔑 When creating styles in JSX, we use camelCase for two-word property names.
//🔑 When creating style objects, we use strings for the value for attributes:
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
// In code, we would refer to these styles with the style attribute set to the value of the specific property in the object. 
// Here, we use curly braces to denote that we want to write some JavaScript inside the JSX. 
// Next, we access those properties like a normal JavaScript object using dot notation:
function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
    </div>
  );
}

export default Navbar;
