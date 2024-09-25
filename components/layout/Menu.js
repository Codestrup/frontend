"use client";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import { useParams, useRouter, usePathname } from "next/navigation";

export default function Menu() {
  const params = usePathname();
  console.log(params, "hii");
  return (
    <>
      <ul>
        <li className="has-dropdown active menu-thumb">
          <Link
            href="/"
            style={{ color: `${params === "/" ? "blue" : "black"}` }}
          >
            Home
            {/* <i className="fas fa-angle-down ps-1" /> */}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            style={{ color: `${params === "/about" ? "blue" : "black"}` }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/internship"
            style={{
              color: `${params === "/internship" ? "blue" : "black"}`,
            }}
          >
            Internship
          </Link>
        </li>
        <li>
          <Link
            href="/learning_Center"
            style={{
              color: `${params === "/learning_Center" ? "blue" : "black"}`,
            }}
          >
            Learning Center
          </Link>
        </li>

        <li>
          <Link
            href="/Achivement"
            style={{
              color: `${params === "/Achivement" ? "blue" : "black"}`,
            }}
          >
            Top Achievers
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            style={{
              color: `${params === "/blogs" ? "blue" : "black"}`,
            }}
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            style={{
              color: `${params === "/contact" ? "blue" : "black"}`,
            }}
          >
            Contact
          </Link>
        </li>
        <Link
          href="https://user.codestrup.in/auth/login"
          className="theme-btn wow fadeInUp flex items-center"
          data-wow-delay=".8s"
          style={{
            padding: "16px 16px",
          }}
        >
          <PersonIcon /> Login | SignUp
        </Link>
      </ul>
    </>
  );
}
