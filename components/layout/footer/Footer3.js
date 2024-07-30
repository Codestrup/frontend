import Link from "next/link"

export default function Footer3() {
    return (
        <>

            <footer className="footer-section footer-bg">
                <div className="footer-shape-4">
                    <img src="/assets/img/footer-shape-4.png" alt="shape-img" />
                </div>

                <div className="shape-2">
                    <img src="/assets/img/footer-shape-3.png" alt="shape-img" />
                </div>





                <div className="footer-widgets-wrapper">

                    <div className="container">
                        <div className=" d-flex align-items-center ">
                            <div className="footer-logo wow fadeInLeft" data-wow-delay=".3s" >
                                <Link href="/">
                                    <img src="/assets/img/logo/logo1.png" alt="logo-img" style={{ width: "90%", height: 'auto', paddingRight: '80px', paddingLeft: '20px' }} />
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="container">


                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".3s">

                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            making its mark as a quality software house. We develop IT solutions, underlined by innovation & value creation that impacts & redefines the businesses processes.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="https://www.facebook.com/codestrup"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://www.instagram.com/codestrup_infotech/"><i className="fab fa-instagram" /></Link>
                                            <Link href="https://in.linkedin.com/company/codestrup-infotech-pvt-ltd"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6  wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-md-6">

                                                <ul className="list-area">
                                                    <li>
                                                        <Link href="/">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/service-details">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            internship
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/project">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            Learning Center
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-6">

                                                <ul className="list-area">
                                                    <li>
                                                        <Link href="/Achivement">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            Top Achievers
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/faq">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            FAQ’S
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">
                                                            <i className="fa-solid fa-chevron-right" />
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-md-6  wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget style-margin" style={{marginLeft:'0px'}}>
                                    <div className="widget-head">
                                      
                                        <h3>Services</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/terms-condition">
                                                <i className="fa-solid fa-chevron-right" />
                                                Terms & Condition
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/refund-policy">
                                                <i className="fa-solid fa-chevron-right" />
                                                Refund Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <i className="fa-solid fa-chevron-right" />
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Disclimer
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin" style={{marginLeft:'0px'}}>
                                    <div className="widget-head">
                                        <h3>Your Knowledge Base</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Learn about the latest internship projects and achievements.
                                            Stay connected with the Codestrup Infotech internship community
                                        </p>
                                        <div className="footer-input">
                                            <input type="email" id="email2" placeholder="Enter Email Address" />
                                            <button className="newsletter-btn" type="submit">
                                                <i className="fab fa-telegram-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-bottom style-3"> */}
                <div className="container">
                    <div className="footer-wrapper d-flex  align-items-center justify-content-center">

                        <p className="wow fadeInRight " style={{ color: 'white' }} data-wow-delay=".5s">
                            © All Copyright {new Date().getFullYear()} by
                            <Link href="/" style={{ color: 'white' }}> CodeStrup</Link>
                        </p>
                    </div>
                </div>

                {/* </div> */}
            </footer>

        </>
    )
}
