import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-center space-x-8 py-4 border-b border-gray-600">
      <Link to="/" className={location.pathname === '/' ? "text-white font-bold" : "text-gray-400 hover:text-white"}>HOME</Link>
      <Link to="/artifacts" className={location.pathname === '/artifacts' ? "text-white font-bold" : "text-gray-400 hover:text-white"}>ARTIFACTS</Link>
      <Link to="/about" className={location.pathname === '/about' ? "text-white font-bold" : "text-gray-400 hover:text-white"}>ABOUT</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? "text-white font-bold" : "text-gray-400 hover:text-white"}>CONTACT</Link>
    </nav>
  );
}

export default Navbar;