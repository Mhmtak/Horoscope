import './Navbar.scss';
import logo from "../../helpers/logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="links">
            <a href="#Horoscope">Horoscope</a>
            <a href="#Dail">Dail</a>
            <a href="#Taros">Tarot</a>
            <a href="#Article">Article</a>
            <a href="#Contact">Contact</a>
        </div>
      
    </div>
  )
}

export default Navbar
