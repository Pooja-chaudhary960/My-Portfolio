import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Pooja Chaudhary</h1>
      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/Poojacv.pdf" target="_blank" rel="noreferrer">View Resume</a>
        <a href="/Poojacv.pdf" download>Download Resume</a>

      </nav>
    </header>
  );
}
