import React, { useState } from 'react';
import axios from 'axios';

const ColorDetector = () => {
    const [file, setFile] = useState(null);
    const [colors, setColors] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file before uploading.');
            return;
        }

        setProcessing(true);
        setError(null);

        const formData = new FormData();
        formData.append('image_file', file);

        try {
            // Send image to remove.bg for background removal
            const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
                headers: {
                    'X-Api-Key': 'srQZH8oEYEC8RSmUUtubXGvX', // Replace with your remove.bg API key
                    'Content-Type': 'multipart/form-data'
                },
                responseType: 'arraybuffer'
            });

            if (response.status !== 200) {
                throw new Error('Failed to remove background');
            }

            // Create a Blob from the response data
            const blob = new Blob([response.data], { type: 'image/png' });

            // Create a new File object from the Blob
            const processedFile = new File([blob], 'processed.png', { type: 'image/png' });

            // Proceed with detecting colors in the processed image
            detectColors(processedFile);
        } catch (error) {
            console.error('Error removing background:', error);

            if (error.response) {
                if (error.response.status === 400) {
                    setError('Bad request: Please check the file and try again.');
                } else if (error.response.status === 403) {
                    setError('Forbidden: Please check your API key.');
                } else {
                    setError('An error occurred: ' + error.response.data);
                }
            } else if (error.request) {
                setError('Network error: Please check your internet connection.');
            } else {
                setError('Error: ' + error.message);
            }

            setProcessing(false);
        }
    };

    const detectColors = (processedFile) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;

                const colorCounts = {};
                for (let i = 0; i < pixels.length; i += 4) {
                    const rgba = `${pixels[i]},${pixels[i+1]},${pixels[i+2]}`;
                    if (!colorCounts[rgba]) {
                        colorCounts[rgba] = 0;
                    }
                    colorCounts[rgba]++;
                }

                const sortedColors = Object.entries(colorCounts)
                    .sort(([,a], [,b]) => b - a)
                    .map(([rgba]) => rgba.split(',').map(Number));

                const dominantColors = sortedColors.slice(0, 5).map(rgba => `rgb(${rgba.join(',')})`);

                setColors(dominantColors);
                setProcessing(false);
            };
            img.src = event.target.result;
        };

        reader.readAsDataURL(processedFile);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file || processing}>
                {processing ? 'Processing...' : 'Detect Colors'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {colors.length > 0 && (
                    <div>
                        <h3>Dominant Colors:</h3>
                        <ul>
                            {colors.map((color, index) => (
                                <li
                                    key={index}
                                    style={{
                                        backgroundColor: color,
                                        width: '50px',
                                        height: '50px',
                                        display: 'inline-block',
                                        margin: '5px',
                                    }}
                                ></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorDetector;
