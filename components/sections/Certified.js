import React from 'react'
import Layout from "@/components/layout/Layout"

const Certified = () => {
    const imgContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
    }
    
    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
        // padding: '80px',
        margin:'50px'
        // marginLeft:'50px',
        // marginRight:'50px',
        // top:'0'
        // paddingTop:'0'
    }

    return (
        <div>
            <Layout>
                <section className="project-section  fix">
                    <div className="container">
                        <div className="row g-1">
                            <h2 className="text-center wow fadeInUp" data-wow-delay=".3s">Certified And Registered In</h2>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image" style={imgContainerStyle}>
                                        <img src="/assets/img/certified/01.png" alt="certified-img" style={imgStyle} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image" style={imgContainerStyle}>
                                        <img src="/assets/img/certified/02.png" alt="certified-img" style={imgStyle} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image" style={imgContainerStyle}>
                                        <img src="/assets/img/certified/03.png" alt="certified-img" style={imgStyle} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default Certified
