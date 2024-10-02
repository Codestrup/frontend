import Link from "next/link";
import Menu from "../Menu";
import OnePageNav from "../OnePageNav";

export default function Header1({
  scroll,
  isOffCanvas,
  handleOffCanvas,
  isSearch,
  handleSearch,
  onePageNav,
}) {
  return (
    <>
      <header>
        <div className="header-top-section fix">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="contact-list">
                <li>
                  <i className="far fa-envelope" />
                  <a href="mailto:info@codestrup.in" style={{textTransform:'lowercase'}} >
                    info@codestrup.in
                  </a>

                </li>
                <li>
                  <i className="fa-solid fa-phone-volume" />
                  <Link href="tel:+919699997689">+91 9699997689</Link>

                </li>
              </ul>
              <div className="top-right">
                <div className="social-icon d-flex align-items-center">
                  <span>Follow Us:</span>
                  <Link href="https://in.linkedin.com/company/codestrup-infotech-pvt-ltd">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link href="https://wa.me/919699997689">
                    <i className="fab fa-whatsapp" />
                  </Link>

                  <Link href="https://t.me/+6HxZOtDBk6w0N2Vl">
                    <i className="fab fa-telegram" />
                  </Link>
                  <Link href="https://www.facebook.com/people/Codestrup-Infotech/61559222888433/?mibextid=ZbWKwL">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com/codestrup_infotech/">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`header-1 ${scroll ? "sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="/assets/img/logo/Codestrup.png"
                        alt="logo-img"
                        style={{
                          // width: "260px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        {onePageNav ? <OnePageNav /> : <Menu />}
                      </nav>
                    </div>
                  </div>
                  {/*                                   
                                    <div className="header-button">
                                        <Link href="/contact" className="theme-btn">
                                            <span>
                                                get A Quote
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </span>
                                        </Link>
                                    </div> */}
                  <div className="header__hamburger  d-md-block d-lg-none my-auto">
                    <div className="sidebar__toggle" onClick={handleOffCanvas}>
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
