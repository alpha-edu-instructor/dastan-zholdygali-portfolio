import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-part"></div>
      <div className="nav-part">
        <Link to="/" className="nav-link">
          Portfolio
        </Link>
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
