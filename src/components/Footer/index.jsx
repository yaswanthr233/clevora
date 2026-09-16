import './index.css'
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo-container">
                <img src="https://res.cloudinary.com/duokznlha/image/upload/v1789058622/ChatGPT_Image_Sep_10_2026_10_08_21_PM_eihnqm.png" alt="clevora logo" className="footer-logo" />
                <div className="footer-logo-text-container">
                    <p className="footer-logo-text-name">Clev<span>ora</span></p>
                    <p className="footer-logo-text">All rights reserved.</p>
                </div>
            </div>
            <div className="footer-quick-links-container">
                <a className="footer-quick-link" href="/">Home</a>
                <a className="footer-quick-link" href="/howitworks">How it works</a>
                <a className="footer-quick-link" href="/about">About</a>
            </div>
            <div className="footer-social-media-links-container">
                <div className="footer-social-media-bg-container">
                    <a href="https://github.com/yaswanthr233" target="_blank" rel="noopener noreferrer" className="footer-social-media-link">
                        <FaGithub size={20} color="#ffffff" />
                    </a>
                </div>
                <div className="footer-social-media-bg-container">
                    <a href="https://www.linkedin.com/in/yaswanth233" target="_blank" rel="noopener noreferrer" className="footer-social-media-link">
                        <TbBrandLinkedinFilled size={20} color="#ffffff" />
                    </a>
                </div>
                <div className="footer-social-media-bg-container">
                    <a href="https://x.com/yaswanthr233" target="_blank" rel="noopener noreferrer" className="footer-social-media-link">
                        <FaSquareXTwitter size={20} color="#ffffff" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer