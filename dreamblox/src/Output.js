import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Output() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dreamText, imagePreviewUrl, voiceFile } = location.state || {};

  // Function to distort text - makes it chaotic and dream-like
  const distortText = (text) => {
    if (!text) return '';
    
    return text.split('').map((char, i) => {
      const styles = [
        { transform: 'rotate(5deg)', fontWeight: 'bold' },
        { transform: 'rotate(-8deg)', fontSize: '1.2em' },
        { transform: 'skew(10deg)', opacity: 0.7 },
        { transform: 'scale(1.3)', color: '#b0acceff' },
        { transform: 'rotate(12deg)', fontStyle: 'italic' },
        { transform: 'translateY(-3px)', fontWeight: '900' },
      ];
      
      const randomStyle = styles[Math.floor(Math.random() * styles.length)];
      
      return (
        <span key={i} style={{ 
          display: 'inline-block',
          ...randomStyle,
          transition: 'all 0.3s'
        }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {/* LEFT SIDE - Original Input */}
      <div style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRight: '3px solid #86929bff',
        overflowY: 'auto'
      }}>
        <h1 style={{ color: '#86929bff', marginBottom: '10px' }}>Your Input</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>What you recorded</p>

        {dreamText && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#a6dcd1ff' }}>Dream Description:</h3>
            <p style={{ 
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              fontSize: '16px',
              color: '#333'
            }}>
              {dreamText}
            </p>
          </div>
        )}

        {imagePreviewUrl && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#a6dcd1ff' }}>Image:</h3>
            <img
              src={imagePreviewUrl}
              alt="Dream Visual"
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '8px',
                border: '2px solid #aaa'
              }}
            />
          </div>
        )}

        {voiceFile && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#a6dcd1ff' }}>Voice Note:</h3>
            <audio controls style={{ width: '100%' }}>
              <source src={URL.createObjectURL(voiceFile)} type={voiceFile.type} />
            </audio>
          </div>
        )}

        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#86929bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px'
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* RIGHT SIDE - Distorted Dream Output */}
      <div style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#2a2a2a',
        color: '#fff',
        overflowY: 'auto',
        position: 'relative'
      }}>
        <h1 style={{ 
          color: '#b0acceff',
          marginBottom: '10px',
          transform: 'rotate(-2deg)',
          textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
        }}>
          Dream Interpretation
        </h1>
        <p style={{ 
          color: '#a6dcd1ff',
          marginBottom: '30px',
          fontStyle: 'italic'
        }}>
          Your subconscious speaks...
        </p>

        {dreamText && (
          <div style={{ 
            marginBottom: '30px',
            padding: '20px',
            backgroundColor: 'rgba(176, 172, 206, 0.1)',
            borderRadius: '10px',
            border: '2px dashed #b0acceff'
          }}>
            <h3 style={{ 
              color: '#b0acceff',
              transform: 'skew(-5deg)',
              marginBottom: '15px'
            }}>
              Distorted Vision:
            </h3>
            <p style={{ 
              fontSize: '18px',
              lineHeight: '2',
              letterSpacing: '2px'
            }}>
              {distortText(dreamText)}
            </p>
          </div>
        )}

        {imagePreviewUrl && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              color: '#b0acceff',
              transform: 'rotate(3deg)',
              marginBottom: '15px'
            }}>
              Visual Echo:
            </h3>
            <img
              src={imagePreviewUrl}
              alt="Distorted Dream"
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '8px',
                border: '3px solid #b0acceff',
                transform: 'rotate(-5deg) scale(1.05)',
                filter: 'hue-rotate(45deg) saturate(1.5) contrast(1.2)',
                boxShadow: '10px 10px 30px rgba(176, 172, 206, 0.3)'
              }}
            />
          </div>
        )}

        {voiceFile && (
          <div style={{ 
            marginBottom: '30px',
            padding: '15px',
            backgroundColor: 'rgba(166, 220, 209, 0.1)',
            borderRadius: '8px'
          }}>
            <h3 style={{ 
              color: '#a6dcd1ff',
              marginBottom: '10px',
              transform: 'skew(5deg)'
            }}>
              Echoed Voice:
            </h3>
            <audio controls style={{ 
              width: '100%',
              filter: 'hue-rotate(90deg)'
            }}>
              <source src={URL.createObjectURL(voiceFile)} type={voiceFile.type} />
            </audio>
          </div>
        )}

        {/* Decorative dream elements */}
        <div style={{
          marginTop: '40px',
          opacity: 0.3,
          fontStyle: 'italic',
          fontSize: '14px'
        }}>
          <p>✧ Dreams are the touchstones of our characters ✧</p>
        </div>
      </div>
    </div>
  );
}

export default Output;