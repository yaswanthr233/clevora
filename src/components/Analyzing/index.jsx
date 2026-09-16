import './index.css'
import { RiLightbulbAiFill } from "react-icons/ri";
import { PropagateLoader } from "react-spinners";

const Analyzing = () => {
    return (
        <div className="analyzing-container">
            <div className="analyzing-logo-container">
                <RiLightbulbAiFill size={28} color="#007bff" />
            </div>
            <p className="analyzing-text">Analyzing your resume...</p>
            <div className="analyzing-loader-container">
                <PropagateLoader color="#365ed7" />
            </div>
        </div>
    )

}
export default Analyzing