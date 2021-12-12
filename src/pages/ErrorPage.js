import React from 'react';
import {
    Link,
  } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div class="flex-column-centered">
            <h1 style={{textAlign:"center", color:"gray"}} >Oops Nothing to see here</h1>
            <p>Go back to the <Link to= "/">Homepage</Link></p>
        </div>
    )
}

export default ErrorPage
