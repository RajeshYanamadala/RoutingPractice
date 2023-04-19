// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="app-container">
    <div className="header-container">
      <div className="wave-title ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
          className="wave-img"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <ul className="nav-bar-titles">
        <li>
          <Link className="heading" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="heading" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="heading" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
