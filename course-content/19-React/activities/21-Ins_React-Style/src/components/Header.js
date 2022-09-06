import React from 'react';
// Here we are importing a CSS file as a dependency
// In this file, we are importing a .css file directly into the component by using an import statement:
import '../styles/Header.css';

// When dealing with JSX, we must reference CSS class names with the attribute className instead of the typical plain-JavaScript class attribute:
function Header() {
  return (
    <header className="header">
      <h1>Home</h1>
    </header>
  );
}

export default Header;
