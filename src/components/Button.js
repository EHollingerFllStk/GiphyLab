import React from 'react';


const Button = (props) => {
  console.log(props)

  const handleSubmit = () => {
    props.getUrl()
  }

  return (
    <div>
      <button onClick={handleSubmit}>
        
          Click Me for a Giphy
      
        </button>
    </div>
  );
};

export default Button