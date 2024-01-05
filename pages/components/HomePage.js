// pages/index.js
import { useState } from 'react';
import styles from '../../styles/Home.module.css'
export default function HomePage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [boxStyle, setBoxStyle] = useState({

    borderRadius: '1rem',
    border: 'none',
    backgroundColor: 'white',
    marginTop: '100px',
    marginBottom: '100px',
    zIndex: '2',
    borderColor: '#0066FF',
    boxShadow: '10px 8px 15px 0px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const generateCode = () => {
    const formattedBoxStyle = Object.entries(boxStyle)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}: ${value};`)
      .join('\n');
  
    const htmlCode = `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .boxGenerated {
      ${formattedBoxStyle}
    }
    </style>
    </head>
    <body>
    <div class="boxGenerated" style="${formattedBoxStyle}">
      <!-- Display content inside the box -->
      <p>Box Content</p>
    </div>
    </body>
    </html>`;
  
    // Copy to clipboard
    navigator.clipboard.writeText(htmlCode).then(() => {
      alert('HTML/CSS code copied!');
    });
  };
  
  const handleBox = () => {
    if (weight && height) {
      // Assuming weight and height are numeric values
      const boxWidth = weight; // Adjust as needed
      const boxHeight = height; // Adjust as needed

      setBoxStyle({
        ...boxStyle,
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,

      });
    }
  };

  return (
    <div>
    <div className={styles.input}> 
    <h1>Static Web Builder</h1>
    <input type="text" className={styles.searchInput} placeholder="Enter weight" value={weight} onChange={handleWeightChange} />
      <input type="text" className={styles.searchInput} placeholder="Enter height" value={height} onChange={handleHeightChange} />
      <button className={styles.button} onClick={handleBox}>Change</button>
      <button className={styles.button} onClick={generateCode}>Generate HTML/CSS</button>
      </div> 
      
      <div className="box" onClick={generateCode} style={boxStyle}>
        {/* Display content inside the box */}
        <p>Box Content</p>
      </div>
    </div>
  );
}
