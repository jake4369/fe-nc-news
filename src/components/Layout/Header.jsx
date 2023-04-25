import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  const openMenu = () => {
    setNavOpen(true);
    setExitAnimation(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
        setExitAnimation(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Company logo" className="logo" />
      </Link>

      <button className="open-menu-btn" onClick={() => openMenu()}></button>

      <NavBar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        exitAnimation={exitAnimation}
        setExitAnimation={exitAnimation}
      />
    </header>
  );
};

export default Header;
