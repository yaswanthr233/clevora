import './index.css'

import { SiTicktick } from "react-icons/si";
import UploadFile from '../../components/UploadFile';
const Home = () => {
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
                <UploadFile/>
            </div>
        </div>
    )
}
export default Home