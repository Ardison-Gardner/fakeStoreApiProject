import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Store</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/test">TEST</a>
      </div>
    </nav>
  );
};

export default Navbar;
