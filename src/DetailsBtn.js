import { useState } from 'react';

function DetailsBtn() {

    const [marginStyle, setMarginStyle] = useState({
        margin: '10px'
    })

    return (
        <div>
            <button style={marginStyle}> More details </button>
        </div>
    )
}

export default DetailsBtn;
