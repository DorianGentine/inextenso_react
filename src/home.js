import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <div className="container container-grid">
      <Link to="/level_1" className="home-link">
        <h2>I</h2>
        <p>Niveau 1</p>
      </Link>
      <Link to="/level_2" className="home-link">
        <h2>II</h2>
        <p>Niveau 2</p>
      </Link>
    </div>
  );
}