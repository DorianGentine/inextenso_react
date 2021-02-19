import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <div className="container container-grid">
      <Link to="/level_1" className="home-link">
        <h2>React I</h2>
        <p>Level 1</p>
      </Link>
      <Link to="/level_2" className="home-link">
        <h2>React II</h2>
        <p>Level 2</p>
      </Link>
      <Link to="/number_type_increment" className="home-link">
        <h2>Algo I</h2>
        <p>Custom Number Type Increment</p>
      </Link>
    </div>
  );
}