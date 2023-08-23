import RESUME_PDF from "../../assets/images/c_uffman_resume_8_21_23.pdf";
import React from "react";
import './index.scss';

const FileViewer = () => {

    return (
        <div className="file-viewer">
            <iframe
                title="PDF"
                src={`/pdfjs-3.9.179-dist/web/viewer.html?file=${RESUME_PDF}`}
                width="100%"
                height="1000px"
                ></iframe>
        </div>
    )
}

export default FileViewer;