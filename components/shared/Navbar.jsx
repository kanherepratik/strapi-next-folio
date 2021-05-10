const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        My Portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
);
export default Navbar;
