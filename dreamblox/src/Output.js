import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Output() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dreamText, imagePreviewUrl, voiceFile } = location.state || {};

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Your input: </h2>
      

      <h1>Your Dream</h1>

      {dreamText && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Dream Description:</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{dreamText}</p>
        </div>
      )}

      {imagePreviewUrl && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Image:</h3>
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
        <div style={{ marginBottom: '20px' }}>
          <h3>Voice Note:</h3>
          <audio controls>
            <source src={URL.createObjectURL(voiceFile)} type={voiceFile.type} />
          </audio>
        </div>
      )}

      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 15px',
          backgroundColor: '#86929bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Output;
