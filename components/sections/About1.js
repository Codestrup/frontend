

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
                                            <img src="/assets/img/about/icon-1 - Copy.svg" alt="icon-img" style={{ color: 'blue' }} />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={6561} />+</h3>
                                        </div>
                                    </div>

                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about1.jpeg")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img src="/assets/img/about3.jpeg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Internship Highlights
                                        </h2>
                                    </div>
                                    <p className="mt-1 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Acquire certification with our online internship program.
                                    </p>
                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Learning and Skill Development</h4>
                                                <p>
                                                Gain practical skills, master programming, solve problems, and enhance teamwork.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Opportunities for Career Growth</h4>
                                                <p>Gain industry insights, receive mentorship from experts, and get career guidance for planning and job search.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Flexibility and Convenience</h4>
                                                <p>Work remotely, enjoy a flexible schedule, and access online resources for learning and development.
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
                                                    Get industry-recognized certifications, validate your skills, and receive job placement assistance for full-time employment.
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
