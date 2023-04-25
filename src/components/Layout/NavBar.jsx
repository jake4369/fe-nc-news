const NavBar = ({ navOpen, setNavOpen, exitAnimation, setExitAnimation }) => {
  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav>
      <div
        className={`mobile-nav__slider ${
          navOpen ? "slide-in-right" : exitAnimation ? "slide-out-right" : ""
        }`}
        style={{
          opacity: navOpen ? 1 : 0,
        }}
      >
        <div className="filter"></div>

        <div className="mobile-nav__container">
          <button
            className="close-menu-btn"
            onClick={() => closeMenu()}
          ></button>
          <ul className="mobile-nav">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>

      <ul className="desktop-nav">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default NavBar;
