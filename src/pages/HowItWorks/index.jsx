import './index.css'
import { FaRobot } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { MdSignalCellular3Bar } from "react-icons/md";
import { FaFileArrowUp } from "react-icons/fa6";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoRocket } from "react-icons/io5";


const HowItWorks = () => {
    return (
        <div className="how-it-works-container">
            <div className="how-it-works-top-container">
                <div className="how-it-works-top-left-container">
                    <div className="home-top-left-ai-text-container">
                        <p className="home-top-left-ai-text">Simple Steps, Big Opportunities</p>
                    </div>
                    <h1 className="home-top-left-heading">How <span>Clevora</span> Works</h1>
                    <p className="home-top-left-paragraph">Get a detailed, Al-powered analysis of your resume in just a few steps. Upload, analyze, and improve - it's that simple!</p>
                </div>
                <div className="how-it-works-top-right-container">
                    <div className="how-it-works-top-right-design-container">
                        <p className="how-it-works-top-right-design-text">Your Resume</p>
                        <div className="how-it-works-top-right-design-template"/>
                        <div className="how-it-works-top-right-design-template t2"/>
                        <div className="how-it-works-top-right-design-template t2"/>
                        <div className="how-it-works-top-right-design-template t2 "/>
                        <div className="how-it-works-top-right-design-template t2 "/>
                        <div className="how-it-works-top-right-design-template t2 "/>
                        <div className="how-it-works-top-right-design-template t2 none"/>
                    </div> 
                    <div className="how-it-works-top-right-design-container-flex">
                    <div className="how-it-works-top-right-design-container2">
                        <FaRobot color="#32a6ff" />
                        <p className="how-it-works-top-right-design-sub-text">Analyze</p>
                    </div>
                    <div className="how-it-works-top-right-design-container2">
                        <FaChartBar color="#188502" />
                        <p className="how-it-works-top-right-design-sub-text">Get Insights</p>
                    </div>
                    <div className="how-it-works-top-right-design-container2">
                        <MdSignalCellular3Bar color="#ffaa32" />
                        <p className="how-it-works-top-right-design-sub-text">Improve</p>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="how-it-works-bottom-container">
                <div className="card-container">
                    <div className="card-icon-num-container">
                        <p className="card-icon-num">1</p>
                    </div>
                    <div className="card-icon-text-container">
                        <FaFileArrowUp color="#25a1ff" size="24px" />
                    </div>
                    <div className="card-text-container">
                        <h1 className="card-text-heading">Upload your resume</h1>
                        <p className="card-text">Upload your resume in PDF format. Our Al securely reads and understands your resume content.</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-icon-num-container">
                        <p className="card-icon-num">2</p>
                    </div>
                    <div className="card-icon-text-container analysis">
                        <FaRobot color="#6625ff" size="24px" />
                    </div>
                    <div className="card-text-container">
                        <h1 className="card-text-heading">Ai Analysis</h1>
                        <p className="card-text">We analyze your resume using advanced Al to evaluate skills, content, structure, and ATS compatibility.</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-icon-num-container">
                        <p className="card-icon-num">3</p>
                    </div>
                    <div className="card-icon-text-container detailed-insights">
                        <BsFillBarChartFill color="#1ca600" size="24px" />
                    </div>
                    <div className="card-text-container">
                        <h1 className="card-text-heading">Get Detailed Insights</h1>
                        <p className="card-text">Receive your resume score, category-wise analysis, strengths, weaknesses, and actionable suggestions.</p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card-icon-num-container">
                        <p className="card-icon-num">4</p>
                    </div>
                    <div className="card-icon-text-container improve">
                        <IoRocket color="#cf8a00" size="24px" />
                    </div>
                    <div className="card-text-container">
                        <h1 className="card-text-heading">Improve & Standout</h1>
                        <p className="card-text">Apply the suggestions, improve your resume, and increase your chances of getting noticed by recruiters.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;