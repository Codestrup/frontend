import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";

export default function Menu() {
  return (
    <>
      <ul>
        <li className="has-dropdown active menu-thumb">
          <Link href="/">
            Home
            {/* <i className="fas fa-angle-down ps-1" /> */}
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/internship">Internship</Link>
        </li>
        <li>
          <Link href="/learning_Center">Learning Center</Link>
        </li>

        <li>
          <Link href="/Achivement">Top Achievers</Link>
        </li>
        <li>
          <Link href="/blogs">Blog</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
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
