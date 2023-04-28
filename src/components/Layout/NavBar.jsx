import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const NavBar = ({ navOpen, setNavOpen, exitAnimation, setExitAnimation }) => {
  const { loggedInUser, setLoggedInUser } = useUser();

  const handleLogOut = () => {
    setLoggedInUser(null);
    closeMenu();
  };

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
          <button className="close-menu-btn" onClick={closeMenu}></button>
          <ul className="mobile-nav">
            <Link to="/" onClick={closeMenu}>
              <li>Home</li>
            </Link>
            <Link to="/articles" onClick={closeMenu}>
              <li>Articles</li>
            </Link>
            <li>Popular</li>
            <li>Trending</li>
            {loggedInUser === null ? (
              <Link to="/login" onClick={closeMenu}>
                <li>Log In</li>
              </Link>
            ) : (
              <Link to="/" onClick={handleLogOut}>
                <li>Log Out</li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      <ul className="desktop-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
        <li>Popular</li>
        <li>Trending</li>
        {loggedInUser === null ? (
          <Link to="/login">
            <li>Log In</li>
          </Link>
        ) : (
          <Link to="/" onClick={handleLogOut}>
            <li>Log Out</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
