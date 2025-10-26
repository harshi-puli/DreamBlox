import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [dreamText, setDreamText] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [voiceFile, setVoiceFile] = useState(null);
  const fileInputRef = useRef(null);
  const voiceInputRef = useRef(null);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
      alert(`Image attached: ${file.name}`);
    }
  };

  // Handle voice file selection
  const handleVoiceChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVoiceFile(file);
      alert(`Voice note attached: ${file.name}`);
    }
  };

  // Triggers hidden file inputs
  const triggerImageUpload = () => fileInputRef.current.click();
  const triggerVoiceUpload = () => voiceInputRef.current.click();

  // Handle dream submission
  const handleSubmit = () => {
    if (!dreamText.trim()) {
      alert("Please write something about your dream first!");
      return;
    }

    // Simulated upload
    alert(`
Dream submitted! 🌙
📝 Text: ${dreamText.slice(0, 50)}...
${imagePreviewUrl ? "🌄 Image attached ✅" : ""}
${voiceFile ? "🎙️ Voice note attached ✅" : ""}
    `);

    // Clear after submit
    setDreamText('');
    setImagePreviewUrl(null);
    setVoiceFile(null);
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>DreamBlox 🌙</h1>
      <p>Record, describe, and visualize your dreams</p>

      {/* Dream Text Input */}
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
        {/* Hidden file inputs */}
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

        {/* Buttons */}
        <button
          onClick={triggerImageUpload}
          style={{
            padding: '10px 15px',
            backgroundColor: '#b0acceff',
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
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit Dream 
        </button>
      </div>

      {/* Image Preview */}
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

      {/* Voice Note Preview */}
      {voiceFile && (
        <div style={{ marginTop: '15px' }}>
          <h4>Voice Note Preview:</h4>
          <audio controls>
            <source src={URL.createObjectURL(voiceFile)} type={voiceFile.type} />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;
