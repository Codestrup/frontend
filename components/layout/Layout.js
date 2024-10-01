"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import MouseCursor from "./MouseCursor";
import Offcanvas from "./Offcanvas";
import Footer3 from "./footer/Footer3";
import Header1 from "./header/Header1";
import { useMediaQuery } from "react-responsive";

export default function Layout({
  headerStyle,
  footerStyle,
  onePageNav,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);

  const [isOffCanvas, setOffCanvas] = useState(false);
  
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      {!isMobile && <MouseCursor />}
      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

      {/* {!headerStyle && <Header2 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} />} */}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          onePageNav={onePageNav}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}
      {/* {headerStyle == 2 ? <Header2 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null} */}
      {/* {headerStyle == 4 ? <Header4 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} /> : null}
            <Search isSearch={isSearch} handleSearch={handleSearch} /> */}

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      {/* {!footerStyle && < Footer1 />} */}
      {footerStyle == 1 ? <Footer3 /> : null}
      {/* {footerStyle == 2 ? < Footer2 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null} */}

      {/* <BackToTop /> */}
    </>
  );
}
