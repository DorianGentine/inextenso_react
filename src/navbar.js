import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/level_1">Level 1</Link>
      <Link to="/level_2">Level 2</Link>
      <Link to="/number_type_increment">Number type increment</Link>
    </div>
  );
};
