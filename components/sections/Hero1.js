
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero1() {
    return (
        <>
            <section className="hero-section fix hero-1 bg-cover" style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}>
                <div className="line-shape">
                    <img src="/assets/img/hero/line-shape.png" alt="shape-img" />
                </div>
                
                <div className="frame-shape">
                    <img src="/assets/img/hero/frame.png" alt="shape-img" />
                </div>
                <div className="mask-shape wow fadeInRight" data-wow-delay=".7s">
                    <img src="/assets/img/hero/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h6 className="wow fadeInUp" data-wow-delay=".2s">Offering Best Internships</h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                Find and Pursue Your Ideal Internship
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                The only platform that offers a global guarantee of actual work experience.
                                </p>
                                <div className="hero-button">
                                    <Link href="/internship" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                        Apply Now
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="hero-image wow fadeInUp" data-wow-delay=".4s">
                                <img src="/assets/img/hero/h3.png" alt="hero-img"  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
