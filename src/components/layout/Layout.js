import React from 'react';
import Navigation from './Navigation';

import 'stylesheet/layout.css';

const Layout = ({children}) => {
    return (
        <div className="layout">
           <Navigation />
           {children}
           <footer className="flex-row-centered" style={{backgroundColor:'#091E42', color:'#fff', minHeight: '30vh'}} >
                <div className="flex-space-between  content-mobile" style={{width:'80vw'}}>
                    <div >
                        <p className="logo-text">resource edge</p>
                        <p className="text">Throw paperwork into the trash.</p>
                    </div>
                    <div className="socials">
                        <div className="icons">
                            <img src="https://res.cloudinary.com/sophire/image/upload/v1639299941/resources-edge/icons/socials/fb_fquh1s.svg" alt="facebook icon"/>
                            <img className="mx-small" src="https://res.cloudinary.com/sophire/image/upload/v1639299941/resources-edge/icons/socials/twitter_e4voll.svg" alt="twitter icon"/>
                            <img src="https://res.cloudinary.com/sophire/image/upload/v1639299941/resources-edge/icons/socials/linkedin_ryd8bd.svg" alt="linkedin icon"/>
                            <img className="ml-small" src="https://res.cloudinary.com/sophire/image/upload/v1639299941/resources-edge/icons/socials/ig_benkkr.svg" alt="instagram icon"/>
                        </div>
                        <p className="text">Copyright © Genesys DevStudio . All rights reserved</p>

                    </div>
                </div>
           </footer>
        </div>
    )
}

export default Layout
