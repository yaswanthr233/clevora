import './index.css'
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo-container">
                <img className="navbar-logo-img" src="https://res.cloudinary.com/duokznlha/image/upload/v1789058622/ChatGPT_Image_Sep_10_2026_10_08_21_PM_eihnqm.png" alt="Clevora Logo"/>
                <h1 className="navbar-logo-text">Clev<span>ora</span></h1>
            </div>
            <div className="navbar-components-container">
                <a className="navbar-component" href="/">Home</a>
                <a className="navbar-component" href="/howitworks">How it works</a>
                <a className="navbar-component" href="/about">About</a>
            </div>
            <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
                <a href="/" className="navbar-mobile-component">Home</a>
                <a href="/howitworks" className="navbar-mobile-component">How it works</a>
                <a href="/about" className="navbar-mobile-component">About</a>
            </div>
            <div className="navbar-button-container">
                <button className="navbar-button" onClick={toggleMenu}>
                    <MdOutlineMenu size={18}/>
                </button>
            </div>
        </nav>
    )
}
export default Navbar