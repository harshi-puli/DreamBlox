import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Output from './Output';

function DreamPage() {
  const [dreamText, setDreamText] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [voiceFile, setVoiceFile] = useState(null);
  const fileInputRef = useRef(null);
  const voiceInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      alert(`Image attached: ${file.name}`);
    }
  };

  const handleVoiceChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVoiceFile(file);
      alert(`Voice note attached: ${file.name}`);
    }
  };

  const triggerImageUpload = () => fileInputRef.current.click();
  const triggerVoiceUpload = () => voiceInputRef.current.click();

  const handleSubmit = () => {
    if (!dreamText.trim() && !imagePreviewUrl && !voiceFile) {
      alert("Please provide at least one input — text, image, or voice note!");
      return;
    }

    // Navigate to Output page with state
    navigate('/Output', {
      state: { dreamText, imagePreviewUrl, voiceFile },
    });
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{fontSize: "40px"}} >DreamBlox</h1>
      <p>Record, describe, and visualize your dreams</p>

      <textarea
        placeholder="Describe your dream..."
        value={dreamText}
        onChange={(e) => setDreamText(e.target.value)}
        style={{
          width: '80%',
          height: '100px',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginTop: '10px'
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <input
          type="file"
          accept="audio/*"
          ref={voiceInputRef}
          onChange={handleVoiceChange}
          style={{ display: 'none' }}
        />

        <button
          onClick={triggerImageUpload}
          style={{
            padding: '10px 15px',
            backgroundColor: '#b0acceff',
            width: '20%',
            height: '100px',
            fontSize: '28px',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
        >
          Upload Image
        </button>

        <button
          onClick={triggerVoiceUpload}
          style={{
            padding: '10px 15px',
            backgroundColor: '#a6dcd1ff',
            width: '20%',
            height: '100px',
            fontSize: '28px',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
        >
          Upload Voice Recording
        </button>

        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 15px',
            backgroundColor: '#86929bff',
            width: '20%',
            height: '100px',
            fontSize: '28px',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit Dream
        </button>
      </div>

      {imagePreviewUrl && (
        <div style={{ marginTop: '15px' }}>
          <h4>Image Preview:</h4>
          <img
            src={imagePreviewUrl}
            alt="Dream Visual"
            style={{
              maxWidth: '300px',
              maxHeight: '200px',
              borderRadius: '5px',
              border: '2px solid #aaa'
            }}
          />
        </div>
      )}

      {voiceFile && (
        <div style={{ marginTop: '15px' }}>
          <h4>Voice Note Preview:</h4>
          <audio controls>
            <source src={URL.createObjectURL(voiceFile)} type={voiceFile.type} />
          </audio>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* You can add more pages later like /summary */}
        <Route path="/" element={<DreamPage />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
