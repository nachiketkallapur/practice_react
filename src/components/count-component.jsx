import React from 'react'

export const Counter = () =>{
    const [X,Y] = React.useState(100);
    return(
        <div>
            <button onClick={() => Y( X+10)}>Click</button>
            count={X}

            
        </div>
    );
}

export default Counter;