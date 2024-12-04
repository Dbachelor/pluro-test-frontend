import React from 'react';

function FileUploadForm({ onFileChange, onUpload, isLoading, error }) {
    const handleChange = (e) => {
        onFileChange(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpload();
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input type="file" accept=".html" onChange={handleChange} className='file-upload-input' />
            <button type="submit" disabled={isLoading} className='file-upload-button' >
                {isLoading ? <img src="./spinner.svg" alt="Loading..." /> : 'Upload and Analyze'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default FileUploadForm;
