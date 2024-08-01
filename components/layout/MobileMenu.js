'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1)
    console.log(activeItem)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-dropdown active menu-thumb">
                                <Link href="/">
                                    Home
                                    <i className="fas fa-angle-down" />
                                </Link>
                                {/* <ul className="submenu has-homemenu" style={{ display: `${activeItem === 1 ? "block" : "none"}` }}>
                                    <li><Link href="/">Home 1</Link></li>
                                    <li><Link href="/index-2">Home 2</Link></li>
                                    <li><Link href="/index-3">Home 3</Link></li>
                                    <li><Link href="/index-4">Home 4</Link></li>
                                </ul> */}
                                {/* <a className={`mean-expand ${activeItem === 1 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(1)}>
                                    <i className="far fa-plus" />
                                </a> */}
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/service-details">
                                    Internship
                                  
                                </Link>
                               
                               
                            </li>
                            <li className="has-dropdown">
                                <Link href="/project">
                                Learning Center
                                
                                </Link>
                              
                           
                            </li>
                            <li>
                                <Link href="/Achivement">
                                Top Achievers
                                </Link>
                                
                            </li>
                            <li className="mean-last">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
