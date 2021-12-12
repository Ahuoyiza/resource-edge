import React from 'react'

const PrimaryButton = ({text,mr,ml,fontSize, bg,mt,mb}) => {
    return (
        
       <button 
       className="btn btn-primary p-small" 
       style={{
           marginLeft:`${ml}`, 
           marginRight:`${mr}`, 
           fontSize:`${fontSize}`,
           background:`${bg}`,
           marginTop:`${mt}`,
           marginBottom:`${mb}`
        }}
        >
            {text}
        </button>
    )
}

export default PrimaryButton
