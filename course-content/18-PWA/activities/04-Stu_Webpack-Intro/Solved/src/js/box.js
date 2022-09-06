// We export this function using an export statement so that we can import it to our index.js file
// default exporting - that is named
// module is a plain JavaScript object with an exports property. exports is a plain JavaScript variable that happens to be set to module.exports. 
// At the end of your file, node.js will basically 'return' module.exports to the require function. 
// Like - const module = { exports: {} };

//vs
//{ boxClick: () =>{...} }
export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};



