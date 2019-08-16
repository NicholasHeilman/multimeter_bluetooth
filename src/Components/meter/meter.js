import React from 'react';

function Meter(){




    return(
        <div>
            <button id='connectBtn' onClick={()=>console.log('Clicked Connect')}>Connect BlueTooth</button>
            <h1>The Meter Goes Here</h1>
        </div>
    )
}

export default Meter;