import Home from 'lucide-react/dist/esm/icons/home';
import Folder from 'lucide-react/dist/esm/icons/folder';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import SquarePen from 'lucide-react/dist/esm/icons/square-pen';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <a href="#home" className="navLink" aria-label="Home">
        <Home size={24} strokeWidth={1.5} />
      </a>

      <a href="#folders" className="navLink" aria-label="Folders">
        <Folder size={24} strokeWidth={1.5} />
      </a>

      <a href="#portfolio" className="navLink" aria-label="Portfolio">
        <Briefcase size={24} strokeWidth={1.5} />
      </a>

      <a href="#tools" className="navLink" aria-label="Tools">
        <Wrench size={24} strokeWidth={1.5} />
      </a>
    </nav>
  );
}
