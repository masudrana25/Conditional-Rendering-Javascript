import React from 'react';

const Details = (props) => {
  const familiar = props.familiar;
  let Greetings;
  if (familiar) {
    Greetings = <p>Welcome, my friend</p>
  }
  else {
     Greetings = <p>Who the hell are you?</p>
  }
  return (
    <div>
      <div>
        <h1>Greetings</h1>
        {Greetings}
      </div>

      <div>
        <h1>Food</h1>
        {
          familiar ? <p>I will buy food food for you. </p>
          : <p>Let's eat his his whose whose..</p>
        }
        
       
      </div>
      <div>
        <h1>Connection</h1>
        {
          familiar && <p>Let's connect to facebook</p>
        }
        
      </div>
    </div>
  );
};

export default Details;