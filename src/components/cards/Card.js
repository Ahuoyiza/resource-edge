import React from 'react';
import 'stylesheet/card.css';


const Card = ({img,alt,title,content,bg,borderRadius,boxshadow, mt,mb,fontSize, ml, mr,p}) => {
    return (
        <div 
        className="card"
        style={{
            textAlign:"left",
            backgroundColor: `${bg}`,
            borderRadius: `${borderRadius}`,
            boxShadow: `${boxshadow}`,
            marginLeft: `${ml}`,
            marginRight: `${mr}`,
            marginTop: `${mt}`,
            marginBottom: `${mb}`,
            padding:`${p}`
        }}
        >
           <img 
            style={{
            marginTop: `${mt}`,
            marginBottom: `${mb}`
             }}
           src={img} 
           alt={alt}/> 
           <h4 
           style={{
                fontSize:`${fontSize}`,
                marginTop: `${mt}`,
                marginBottom: `${mb}`,
                color:'#091E42'
           }}
           >{title}</h4>
           <p
           style={{color:'#5E6C84',fontSize:'15px',}}
           >{content}</p>
        </div>
    )
}

export default Card
