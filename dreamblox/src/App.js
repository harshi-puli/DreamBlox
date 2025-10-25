import React, { useState } from 'react'; // 👈 Import useState
import logo from './logo.svg';
import './App.css';

function App() {
  // 1. STATE: To hold the selected file object and its preview URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  // 2. HANDLER: Captures the file when the user selects it
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      setSelectedFile(file);
      
      // Create a temporary URL for immediate image preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    }
  };

  // 3. HANDLER: Simulates the upload action (sending the file to a server)
  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select an image to upload with your dream!");
      return;
    }

    // --- Backend Upload Simulation ---
    // In a real app, you would use fetch/axios and FormData 
    // to send 'selectedFile' to your server endpoint here.
    // ---------------------------------
    
    alert(`Simulated upload of dream image: ${selectedFile.name}`);
    
    // Optional: Clear the selection after "upload"
    // setSelectedFile(null);
    // setImagePreviewUrl(null);
  };

  return (
    <div className="App">
      <h1>DreamBlox 🌙</h1>
      <p>Write your dream journal below:</p>
      <textarea placeholder="Describe your dream..."></textarea>

      {/* --- IMAGE UPLOAD SECTION --- */}
      <div style={{ margin: '20px 0', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h2>Add a Dream Image</h2>
        
        {/* File Selection Input */}
        <input 
          type="file" 
          accept="image/*" // Only allows image files
          onChange={handleFileChange} 
          style={{ marginBottom: '10px' }}
        />
        
        {/* Image Preview */}
        {imagePreviewUrl && (
          <div style={{ margin: '10px 0' }}>
            <h4>Image Preview:</h4>
            <img 
              src={imagePreviewUrl} 
              alt="Dream Visual" 
              style={{ maxWidth: '300px', maxHeight: '200px', height: 'auto', border: '2px solid #aaa', borderRadius: '5px' }} 
            />
          </div>
        )}

        {/* Upload Button */}
        <button 
          onClick={handleUpload} 
          disabled={!selectedFile}
          style={{ 
            padding: '10px 15px', 
            backgroundColor: selectedFile ? '#6c5ce7' : '#ccc', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: selectedFile ? 'pointer' : 'not-allowed' 
          }}
        >
          Attach Image to Dream
        </button>
      </div>
      {/* ---------------------------- */}

    </div>
  );
}

export default App;
