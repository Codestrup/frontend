


import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    return (
        <>
            <section className="about-section section-padding fix" id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img src="/assets/img/about/icon-1 - Copy.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={6561} />+</h3>
                                        </div>
                                    </div>

                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/about1.jpeg")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s" style={{}}>
                                            <img src="/assets/img/about/about3.jpeg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">ABOUT CODESTRUP INFOTECH</span> */}
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Internship Highlights
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Become certified with our Virtual Internship Program
                                    </p>
                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Learning and Skill Development</h4>
                                                <p>
                                                    Gain hands-on experience with real-world projects, master technical skills, enhance problem-solving, and improve soft skills
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Career Growth and Opportunities
                                                </h4>
                                                <p>

                                                    Gain industry insights into the software lifecycle and learn from experienced professionals through mentorship
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" style={{width:'44px',height:'44px'}} />
                                            </div>
                                            <div className="content">
                                                <h4>Flexibility and Convenience</h4>
                                                <p>
                                                Remote work, a flexible schedule, and access to online resources enable balanced learning and productivity.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Benefits</h4>
                                                <p>
                                                Verify your accomplishments and abilities with a certificate of completion. Acquire certificates to open up new opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
