import React from 'react';
import Layout from 'components/layout/Layout';

import 'stylesheet/landingpage.css'

const LandingPage = () => {
    return (
        <Layout>
            <section className="flex-row-centered hero px-xlarge ">
                <div className="hero-text">
                    <h1>
                    Throw paperwork<br/> into the trash where<br/> it belongs.
                    </h1>
                    <p>
                    Eliminate all the hassle involved in managing people operations by automating it.
                    </p>
                </div>
                <div className="hero-image">
                    <img className="mobile-hidden" src="https://res.cloudinary.com/sophire/image/upload/v1639298278/resources-edge/desktop/images/hero-image.svg" alt="man-lounging"/>
                    <img className="hidden show-mobile" src=" https://res.cloudinary.com/sophire/image/upload/v1639298466/resources-edge/mobile/images/hero-image-mb_thsqvr.svg" alt="man-lounging" />
                </div>
            </section>
        </Layout>
    )
}

export default LandingPage
