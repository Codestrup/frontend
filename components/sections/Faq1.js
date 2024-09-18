import Accordion1 from "../elements/Accordion1";
import Link from "next/link";

export default function Faq1() {
    return (
        <>
            <section className="faq-section fix " style={{padding:'100px 0'}}>
                <div className="right-shape">
                    <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
                </div>
                <div className="faq-shape-box">
                    <div className="faq-shape">
                        <img src="/assets/img/faq/shape.png" alt="shape-img" />
                    </div>
                </div>
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="faq-image">
                                    <img src="/assets/img/faq/image.webp" alt="faq-img" style={{ borderRadius: '41px' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column">
                                <div className="faq-content flex-grow-1">
                                    <div className="section-title">
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            Frequently Asked Questions
                                        </h2>
                                    </div>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <Accordion1 />
                                    </div>
                                    <div className="about-author " style={{marginTop:'2rem'}}>
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/faq" className="theme-btn">
                                                Explore More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
