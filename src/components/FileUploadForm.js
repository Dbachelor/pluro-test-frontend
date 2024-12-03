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
        <form onSubmit={handleSubmit}>
            <input type="file" accept=".html" onChange={handleChange} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? <img src="./spinner.svg" alt="Loading..." /> : 'Upload and Analyze'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default FileUploadForm;
