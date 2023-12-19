import ominifoodLogo from "../../img/omnifood-logo.png";
import header from "./header.module.css";
import navigation from "./navigation.module.css";

const Header = () => (
  <header className={header.header}>
    <a href="#">
      <img className={header.logo} alt="Omnifood logo" src={ominifoodLogo} />
    </a>

    <nav className={navigation["main-nav"]}>
      <ul className={navigation["main-nav-list"]}>
        <li>
          <a className={navigation["main-nav-link"]} href="#">
            How it works
          </a>
        </li>
        <li>
          <a className={navigation["main-nav-link"]} href="#">
            Meals
          </a>
        </li>
        <li>
          <a className={navigation["main-nav-link"]} href="#">
            Testimonials
          </a>
        </li>
        <li>
          <a className={navigation["main-nav-link"]} href="#">
            Pricing
          </a>
        </li>
        <li>
          <a
            className={`${navigation["main-nav-link"]} ${navigation["nav-cta"]}`}
            href="#"
          >
            Try for free
          </a>
        </li>
      </ul>
    </nav>

    <button className="btn-mobile-nav">
      <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
    </button>
  </header>
);

export default Header;
