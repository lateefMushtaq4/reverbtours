import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
           <Link to="/"> <h2>Reverb Tour & Travels</h2></Link>
        <nav>
          <Link to="/destinations">Tours</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
