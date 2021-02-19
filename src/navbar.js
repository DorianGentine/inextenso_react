import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <div className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/level_1">Level 1</Link>
      <Link to="/level_2">Level 2</Link>
    </div>
  );
};