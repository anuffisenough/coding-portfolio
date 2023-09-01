import RESUME_PDF from "../../assets/images/C_Uffman_WebDev_Resume_9_1_23.pdf";
import React from "react";
import Loader from 'react-loaders';
import './index.scss';

const FileViewer = () => {

    return (

        <div className="file-viewer">
            <iframe
                title="PDF"
                src={`/pdfjs-3.9.179-dist/web/viewer.html?file=${RESUME_PDF}`}
                width="60%"
                height="1000px"
                ></iframe>
        </div>
    )
}

export default FileViewer;