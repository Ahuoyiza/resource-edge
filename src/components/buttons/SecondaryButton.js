import React from 'react';

const SecondaryButton = ({text,mr,ml,fontSize,bg}) => {
    return (
        <button 
        className="btn btn-secondary p-small"
        style={{
            marginLeft:`${ml}`, 
            marginRight:`${mr}`, 
            fontSize:`${fontSize}`,
            background:`${bg}`,
        }}
        >
            {text}
        </button>
    )
}

export default SecondaryButton
