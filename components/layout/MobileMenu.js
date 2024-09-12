"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeItem, setActiveItem] = useState(1);
  

  const handleActiveItem = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link>
          <nav className="mean-nav">
            <ul>
              <li className=" active menu-thumb">
                <Link href="/">
                  Home 
                  <i className="fas fa-angle-down" />
                </Link>
              
              </li>
              <li>
                <Link href="/about" >About</Link>
              </li>
              <li>
                <Link href="/internship">Internship</Link>
              </li>
              <li className="">
                <Link href="/learning_Center">Learning Center</Link>
              </li>
              <li>
                <Link href="/Achivement">Top Achievers</Link>
              </li>
              <li className="">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
