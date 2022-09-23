import React from "react";


const Gifs = (props) => {
   
  return  <img src={props.getDog} alt="dog" />
};

// We must export the component to use it in other files
export default Gifs;
