import { Home, Folder, Briefcase, Wrench, SquarePen } from 'lucide-react';
import './NavBar.css';

export default function Navbar() {
  return (
    <nav className="navBarContainer">
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

      <a href="#edit" className="navLink" aria-label="Edit">
        <SquarePen size={24} strokeWidth={1.5} />
      </a>
    </nav>
  );
}
