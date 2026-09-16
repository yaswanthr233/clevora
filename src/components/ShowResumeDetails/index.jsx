import './index.css'
import { BsBarChartFill } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { BsSuitcaseLgFill } from "react-icons/bs";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { SiTicktick } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import { RiLightbulbAiFill } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";


const ShowResumeDetails = (props) => {
    const { resume } = props;
    console.log(resume);
    const {ats_score,category_scores,resume_score,skills,strengths,suggestions,weaknesses} = resume;
    return (
        <div className="show-resume-details-container">
            <div className="resume-score-container">
                <div className="resume-score-sub-container">
                    <div className="resume-score-icon-container">
                        <BsBarChartFill  size={30} />
                    </div>
                    <p className="resume-score-text">Resume Score</p>
                </div>
                <div className="progress-circle" 
                style={{
                    "--score": `${resume_score}%`
                }}>
                     <div className="progress-content">
                    <span className="progress-text">{resume_score}</span>
                    <small className="progress-small-text">/100</small>
                    </div>
                </div>
            </div>
            <div className="resume-score-container">
                <div className="resume-score-sub-container">
                    <div className="resume-score-icon-container">
                        <GrScorecard color="#ff0000" size="22px" />
                    </div>
                    <p className="resume-score-text">ATS Score</p>
                </div>
                <div className="progress-circle" 
                style={{
                    "--score": `${ats_score}%`
                }}>
                     <div className="progress-content">
                    <span className="progress-text">{ats_score}</span>
                    <small className="progress-small-text">/100</small>
                    </div>
                </div>
            </div>
            <div className="resume-score-container">
                <div className="resume-score-sub-container">
                    <div className="resume-score-icon-container">
                        <BsSuitcaseLgFill color="#fbbc00" size="22px" />
                    </div>
                    <p className="resume-score-text">Experience</p>
                </div>
                <div className="progress-circle" 
                style={{
                    "--score": `${category_scores.experience}%`
                }}>
                     <div className="progress-content">
                    <span className="progress-text">{category_scores.experience}</span>
                    <small className="progress-small-text">/100</small>
                    </div>
                </div>
            </div>
            <div className="resume-category-score-container">
                <div className="resume-score-sub-container">
                    <div className="resume-score-icon-container">
                        <BsBarChartFill color="#0054fb" size="22px" />
                    </div>
                    <div>
                        <p className="resume-score-text">Category Scores</p>
                        <p className="resume-score-description">Detailed breakdown of your resume.</p>
                    </div>
                    
                </div>
                <ul className="resume-category-score-list-container">
                    {
                        Object.entries(category_scores).map(([category, score]) => (
                            <li className="resume-category-score-list-item" key={category}>
                                <span className="resume-category-score-list-item-text">{category}</span>
                                <div className="progress-bar" 
                                style={{
                                     "--score": `${score}%`
                                     }}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="resume-category-score-container">
                <div className="resume-score-sub-container">
                    <div className="resume-score-icon-container">
                        <BsStack color="#0054fb" size="22px" />
                    </div>
                    <div>
                        <p className="resume-score-text">Top Skills Found</p>
                        <p className="resume-score-description">Skills detected in your resume.</p>
                    </div>
                    
                </div>
                <ul className="resume-skills-list-container">
                    {
                        skills.map((skill, index) => (
                            <li className="skill" key={index}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="resume-strength-container">
                <div className="resume-strength-sub-container">
                    <div className="resume-strength-icon-container">
                        <AiFillLike color="#018e03" size="22px" />
                    </div>
                    <div>
                        <p className="resume-score-text">Strengths</p>
                        <p className="resume-score-description">What you're doing well.</p>
                    </div>
                    
                </div>
                <ul className="resume-strength-list-container">
                    {
                        strengths.map((strength, index) => (
                            <li className="strength" key={index}>
                                <SiTicktick color="green" size="24px" />
                                <p className="strength-text">{strength}</p>
                                </li>
                        ))
                    }
                </ul>
            </div>
            <div className="resume-strength-container">
                <div className="resume-strength-sub-container areas-for-improvement">
                    <div className="resume-strength-icon-container areas-for-improvement-icon-container">
                        <IoIosWarning color="#fb0000" size="22px" />
                    </div>
                    <div>
                        <p className="resume-score-text">Areas for Improvement</p>
                        <p className="resume-score-description">What you can work on.</p>
                    </div>
                    
                </div>
                <ul className="resume-strength-list-container ">
                    {
                        weaknesses.map((strength, index) => (
                            <li className="areas-for-improvement-list-item" key={index}>
                                <IoIosWarning color="red" size="24px" />
                                <p className="strength-text">{strength}</p>
                                </li>
                        ))
                    }
                </ul>
            </div>
            <div className="resume-strength-container">
                <div className="resume-strength-sub-container suggestions">
                    <div className="resume-strength-icon-container suggestions-icon-container">
                        <RiLightbulbAiFill color="#0259b7" size="22px" />
                    </div>
                    <div>
                        <p className="resume-score-text">Suggestions</p>
                        <p className="resume-score-description">Personalized recommendations.</p>
                    </div>
                    
                </div>
                <ul className="resume-suggestions-list-container">
                    {
                        suggestions.map((strength, index) => (
                            <li className="suggestions-list-item" key={index}>
                                <SiTicktick color="blue" size="24px" />
                                <p className="strength-text">{strength}</p>
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}
export default ShowResumeDetails