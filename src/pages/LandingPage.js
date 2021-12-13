import React from 'react';

import Layout from 'components/layout/Layout';
import Card from 'components/cards/Card';

import 'stylesheet/landingpage.css'

const LandingPage = () => {
    return (
        <Layout>
                <section className="flex-row-centered hero ">
                    <div className="hero-text">
                        <h1>
                        Throw paperwork into the trash where it belongs.
                        </h1>
                        <p className="tagline">
                        Eliminate all the hassle involved in managing people operations by automating it.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img className="mobile-hidden" src="https://res.cloudinary.com/sophire/image/upload/v1639298278/resources-edge/desktop/images/hero-image.svg" alt="man-lounging"/>
                        <img className="hidden show-mobile" src=" https://res.cloudinary.com/sophire/image/upload/v1639298466/resources-edge/mobile/images/hero-image-mb_thsqvr.svg" alt="man-lounging" />
                    </div>
                </section>

                <section className="hr-wrap py-xlarge">
                    <div className="hr-section">
                        <h2 style={{color:'#091E42',fontSize:'1.9em',}}>Human Resources</h2>
                        <p
                        className="mb-large mt-large"
                        style={{color:'#5E6C84',fontSize:'1em', }}
                        >
                        Onboard new employees, manage the employee lifecycle <br/> and measure employee performance.
                        </p>
                        <div className="flex-row hr-cards">
                            <Card
                            img="https://res.cloudinary.com/sophire/image/upload/v1639299545/resources-edge/icons/employee_z5jl5g.svg"
                            alt="employee"
                            title="Employee Management"
                            content="From Hiring &amp; Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities &amp; paperwork involved in managing your team."
                            bg="#fff"
                            mt="10px"
                            mb="10px"
                            borderRadius="15px"
                            p="30px"
                            fontSize="1.3em"
                            boxshadow="0px 18px 31px rgba(9, 30, 66, 0.06)"
                            
                            />
                            <Card
                            img="https://res.cloudinary.com/sophire/image/upload/v1639299545/resources-edge/icons/performance_zh65wg.svg"
                            alt="employee"
                            title="Employee Management"
                            content="From Hiring &amp; Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities &amp; paperwork involved in managing your team."
                            bg="#fff"
                            mt="10px"
                            mb="10px"
                            borderRadius="15px"
                            p="30px"
                            fontSize="1.3em"
                            boxshadow="0px 18px 31px rgba(9, 30, 66, 0.06)"
                            ml="5%"
                            mr="5%"
                            />
                            <Card
                            img="https://res.cloudinary.com/sophire/image/upload/v1639299545/resources-edge/icons/pto_l61be1.svg"
                            alt="employee"
                            title="Employee Management"
                            content="From Hiring &amp; Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities &amp; paperwork involved in managing your team."
                            bg="#fff"
                            mt="10px"
                            mb="10px"
                            borderRadius="15px"
                            p="30px"
                            fontSize="1.3em"
                            boxshadow="0px 18px 31px rgba(9, 30, 66, 0.06)"
                        
                            />
                        </div>
                        <div>
                            <img className="mobile-hidden" src="https://res.cloudinary.com/sophire/image/upload/v1639298711/resources-edge/desktop/images/directory.png"  alt="employee"/>
                            <img className="hidden show-mobile" src="https://res.cloudinary.com/sophire/image/upload/v1639300269/resources-edge/mobile/images/Direct_Reports_-_Listdirectory_ahuwtr.png"  alt="employee"/>
                        </div>
                    </div>
                </section>
        </Layout>
    )
}

export default LandingPage
