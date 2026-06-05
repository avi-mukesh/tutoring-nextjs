const Navbar = () => {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="brand">
          <svg
            className="cap"
            viewBox="0 0 24 24"
            fill="var(--sage)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2 1 7l11 5 9-4.09V14h2V7L12 2zM5 11.18V14.5c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.32l-7 3.18-7-3.18z" />
          </svg>
          <span className="mark">Mukesh Academy</span>
        </a>
        <nav className="links">
          <a href="#works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#voices">Voices</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn" data-magnetic>
          Book a call
        </a>
      </div>
    </header>
  );
};

export default Navbar;
