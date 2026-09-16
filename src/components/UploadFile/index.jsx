import './index.css'
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState,useRef } from 'react';
import { GrStatusGood } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import ShowResumeDetails from '../ShowResumeDetails';
import Analyzing from '../Analyzing';
import { useNavigate } from 'react-router';

const UploadFile = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [resumeDetails, setResumeDetails] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const handleChooseFile = () => {
        fileInputRef.current.click();
    }
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        setIsAnalyzing(true);
        const uploadPdf = async () => {
            try{
                const options = {
                    method: 'POST',
                    body: formData,
                }
                const response = await fetch(import.meta.env.VITE_N8N_WEBHOOK_URL, options);
                if(response.ok){
                    const data = await response.json();
                    console.log(data);
                    setResumeDetails(data);
                } else {
                    navigate('/manyreqerr');
                }
            } catch(error){
                navigate('/manyreqerr');
            console.error('Error uploading file:', error);
            } finally {
                setIsAnalyzing(false);
                setShowDetails(true);
            }
        } 
        uploadPdf();
    }
    const renderContent = () => {
        return (
        <div className="upload-file-container">
            {
                isAnalyzing ? (
                       <Analyzing/>
                ) : showDetails ? <ShowResumeDetails resume={resumeDetails} />  :  (
                    <div className="upload-file-main-container">
                {!isUploaded? (
                    <div className="upload-file-sub-container">
                        <div className="upload-file-icon-container">
                            <IoCloudUploadOutline  size={28} color="#003ffb" />
                        </div>
                        <div className="upload-file-text-container">
                            <p className="upload-resume-text">Upload Your Resume</p>
                        <p className="upload-instructions">Upload your file here...</p>
                        <input type="file" ref={fileInputRef} accept=".pdf" onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            setFile(selectedFile);
                            setIsUploaded(true);
                        }} style={{ display: 'none' }} />
                        <button className="upload-file-button" onClick={handleChooseFile}>Choose File</button>
                        <p className="upload-instructions">Uploaded file: {file ? file.name : 'No file selected'}</p>
                        <p className="upload-instructions">Supported file types: PDF</p>
                    </div>
                </div>
                ):(
                    <div className="upload-file-sub-container-2">
                        <div className="file-uploaded-icon-container">
                            <GrStatusGood size={30} color="green" />
                            <div className="file-uploaded-text-container">
                            <p className="file-uploaded-text">File Selected Successfully</p>
                            <p className="upload-instructions">Your Resume is ready to be analyzed.</p>
                        </div>
                        </div>
                        <div className="uploaded-file-container">
                            <FaFilePdf size={30} color="#fb0000" />
                            <p className="uploaded-file-name">{file ? file.name : 'No file selected'}</p>

                        </div>
                        <button className="analyze-button" onClick={handleFileUpload}>Analyze My Resume</button>
                    </div>
                )    
            }
            </div>
                )
            }
        </div>
    )
    }

    

    return renderContent();
}
export default UploadFile