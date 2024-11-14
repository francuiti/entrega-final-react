import { BsBox } from "react-icons/bs";
import "./navbar.css"
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavigationBar = () => {
  return (
    <nav className="main-nav">
      <ul className="category-list">
        <li className="category-item">
          <Link to="/category/remeras" className="link-text">Remeras</Link>
        </li>
        <li className="category-item">
          <Link to="/category/pantalones" className="link-text">Pantalones</Link>
        </li>
        <li className="category-item">
          <Link to="/category/zapatillas" className="link-text">Zapatillas</Link>
        </li>
      </ul>

      <Link to="/" className="brand-section primary-color">
        <BsBox className="logo-icon" />
        <p className="brand-name">Box Ecommerce</p>
      </Link>

      <CartWidget />
    </nav>
  );
};

export default NavigationBar;
