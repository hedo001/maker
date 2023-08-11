import logo from "../../images/svg/Logo.svg";
import "./headerstyle.css";
export function Headers() {
  return (
    <header className="header">
      <div className="header__wrp ">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list-item">
              <a href="/">Home</a>
            </li>
            <li className="header__nav__list-item">
              <a href="/">Services</a>
            </li>
            <li className="header__nav__list-item">
              <a href="/">About</a>
            </li>
            <li className="header__nav__list-item">
              <a href="/">The Team</a>
            </li>
            <li className="header__nav__list-item">
              <a href="/">Pricing</a>
            </li>
            <li className="header__nav__list-item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="header__button btn">Sign Up</button>
      </div>
    </header>
  );
}
