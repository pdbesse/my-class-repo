import React from 'react';

export default function Card(props) {
  // We declare an object called cardStyle that will contain a property of width with an assoicated value
  const cardStyle = {
    //Equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  // (0 - 99) + 200 - max of 299
  const randomWidth = () => {
    const number = Math.random() * (100) + 200;
    //no decimal (Could use Math.round(number) or Math.floor(number) OR Math.ceil(number))
    return number.toString().split('.')[0];
  };

// In the JSX return, we can assign a style from an object by using curly braces
// We are assigning return JSX in line style `{width: '18rem'}`
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">ID: {props.id}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
