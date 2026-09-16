import './index.css'
import { ImPower } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-top-container">
                <div className="about-top-left-container">
                    <div className="about-top-left-ai-text-container">
                        <p className="about-top-left-ai-text">About Clevora</p>
                    </div>
                    <h1 className="about-top-left-heading">A Smarter Way to <span>Build Your Future</span></h1>
                    <p className="about-top-left-description">Clevora is an AI-powered resume analyzer designed to help students and job seekers create stronger, more impactful resumes. It analyzes your resume across key areas such as content, skills, experience, projects, education, formatting, and ATS compatibility. Clevora identifies your strengths and weaknesses, provides personalized and actionable suggestions, and helps you understand exactly where your resume can be improved. Our goal is to make resume improvement simple, accessible, and effective—so you can present your skills with confidence and move one step closer to better career opportunities.</p>
                </div>

            </div>
            <div className="about-cards-content-container">
                <div className="card-container">
                    <div className="card-icon-container">
                        <ImPower color="#003ffb" size={24}/>
                    </div>
                    <h1 className="card-heading">AI-Powered Analysis</h1>
                    <p className="card-description">We use AI to evaluate your resume's skills, content, structure, and overall quality.</p>
                </div>
                <div className="card-container">
                    <div className="card-icon-container icon2">
                        <ImPower color="#1c8b00" size={24}/>
                    </div>
                    <h1 className="card-heading">ATS Compatibility</h1>
                    <p className="card-description">Get detailed insights on how well your resume performs with Applicant Tracking Systems (ATS).</p>
                </div>
                <div className="card-container">
                    <div className="card-icon-container icon3">
                        <ImPower color="#7300ff" size={24}/>
                    </div>
                    <h1 className="card-heading">Actionable Suggestions</h1>
                    <p className="card-description">Receive practical and easy-to-understand suggestions to highlight your strengths and fix weaknesses.</p>
                </div>
                <div className="card-container">
                    <div className="card-icon-container icon4">
                        <ImPower color="#ffc001" size={24}/>
                    </div>
                    <h1 className="card-heading">Built for Everyone</h1>
                    <p className="card-description">Whether you're a student, fresher, or working professional, Clevora is designed to support your growth.</p>
                </div>
                
            </div>
            <div className="about-me-container">
                <img src="https://res.cloudinary.com/duokznlha/image/upload/v1789535640/ChatGPT_Image_Sep_16_2026_10_43_33_AM_f7jmel.png" alt="About Me" className="about-me-image"/>
                <div className="about-me-text-container">
                    <h2 className="about-me-heading">About Me</h2>
                    <h3 className="about-me-subheading">Hi, I'm Yaswanth Reddy 👋</h3> 
                    <p>I'm a Computer Science student and the creator of Clevora. I built this project to help students and job seekers improve their resumes using Al. This is a student project built with a passion for learning and creating useful tools that can make a difference.</p>
                    <div className="about-me-social-links-container">
                        <a className="social-link" href="https://github.com/yaswanthr233" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={28} color="#000" />
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/yaswanthr233" target="_blank" rel="noopener noreferrer">
                            <TbBrandLinkedinFilled size={32} color="#3dadfd" />
                        </a>
                        <a className="social-link" href="https://twitter.com/yaswanthr233" target="_blank" rel="noopener noreferrer">
                            <FaSquareXTwitter size={28} color="#000" />
                        </a>
                        <a className="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=yaswanthr233@gmail.com" target="_blank" rel="noopener noreferrer">
                            <IoMail size={28} color="#000" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About