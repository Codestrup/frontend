"use client";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import { useParams, useRouter, usePathname } from "next/navigation";
import useZoomLevel from "../hooks/useZoomLevel";
import ModuleStyles from "./Menu.module.css";

const styles = {
  zoomInStyles: {
    display: "flex",
    alignItems: "center",
  },

  loginBtn: {
    padding: "16px 16px",
   
  },
  zoomedInLoginBtn: {
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
};

// Create an array of links
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/internship", label: "Internship" },
  { href: "/learning_Center", label: "Learning Center" },
  { href: "/Achivement", label: "Top Achievers" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Menu() {
  const params = usePathname();
  const zoomLevel = useZoomLevel();

  return (
    <>
      <ul style={zoomLevel > 1 ? styles.zoomInStyles : null}>
        {links.map((link, index) => (
          <li
            key={index}
            className={`${params === link.href ? "active" : ""} ${
              zoomLevel > 1 ? ModuleStyles.zoomedListItems : ""
            }`}
          >
            <Link
              href={link.href}
              style={{ color: params === link.href ? "blue" : "black" }}
            >
              {link.label}
            </Link>
          </li>
        ))}

        <Link
          href="https://user.codestrup.in/auth/login"
          className="theme-btn wow fadeInUp "
          data-wow-delay=".8s"
          style={zoomLevel > 1 ? styles.zoomedInLoginBtn : styles.loginBtn}
        >
          <PersonIcon /> Login
        </Link>
      </ul>
    </>
  );
}
