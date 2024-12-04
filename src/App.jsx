import React, { useEffect, useState } from 'react';
import FileUploadForm from './components/FileUploadForm';
import ResultsTable from './components/ResultsTable';
import './App.css';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const handleFileChange = (file) => setFile(file);

  
  const handleUpload = async () => {
    if (!file) {
      setError('Please select an HTML file to upload.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('htmlFile', file);

    try {
      
      const response = await axios.post('https://pluro-test-backend.onrender.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setResult(response.data);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to analyze file.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError('')
  }, [file])

  return (
    <div className="app">
      <div className="analyzer-container">
        <h1 className='title'>Accessibility Analyzer</h1>
        <FileUploadForm
          onFileChange={handleFileChange}
          onUpload={handleUpload}
          isLoading={isLoading}
          error={error}
        />
      </div>
      {result && (
        <div className="results">
          <ResultsTable results={result} />
        </div>
      )}
    </div>
  );
}

export default App;
