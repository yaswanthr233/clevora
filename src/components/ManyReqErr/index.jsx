import './index.css'
import { SiTicktick } from "react-icons/si";
import {useNavigate} from 'react-router'

const ManyReqErr = () => {
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-top-container">
                <div className="home-top-left-container">
                    <div className="home-top-left-ai-text-container">
                        <p className="home-top-left-ai-text">Ai Powered Resume Analysis</p>
                    </div>
                    <h1 className="home-top-left-heading">Turn Your Resume <span>Into Opportunities</span></h1>
                    <p className="home-top-left-description">Get an Al-powered evaluation of your skills, strengths, weaknesses, and ATS compatibility. Improve your resume and stand out from the crowd.</p>
                </div>
                <div className="home-top-right-container">
                    <div className="resume-design-container">
                        <h1 className="resume-heading">Your Resume</h1>
                        <div className="resume-design-template"/>
                        <div className="resume-design-template resume-design-template-1"/>
                        <div className="resume-design-template resume-design-template-2"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-1"/>
                        <div className="resume-design-template resume-design-template-2"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-1 none"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                        <div className="resume-design-template resume-design-template-2 none"/>
                    </div>
                    <div className="resume-design-container-2">
                        <div className="ats-template-sub-container">
                            <SiTicktick color="green" />
                            <p className="ats-template-text">ATS Compatible</p>
                        </div>
                        <div className="ats-template-sub-container">
                            <SiTicktick color="green" />
                            <p className="ats-template-text">Relavant Skills</p>
                        </div>
                        <div className="ats-template-sub-container">
                            <SiTicktick color="green" />
                            <p className="ats-template-text">Improvement Tips</p>
                        </div>
                        <div className="ats-template-sub-container">
                            <SiTicktick color="green" />
                            <p className="ats-template-text">Well Structured</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-bottom-container">
                <div className="many-req-err-container">
                    <img className="many-req-err-image" src="https://res.cloudinary.com/duokznlha/image/upload/v1789262807/ChatGPT_Image_Sep_13_2026_06_56_06_AM_kw7mzh.png" alt="Many Requests Error" />
                    <p className="many-req-err-text">I am Receiving Too Many Requests Please Try Again Later</p>
                    <button className="try-again-button" onClick={() => navigate('/')} >Try Again</button>
                </div>
            </div>
        </div>
    )
}
export default ManyReqErr;