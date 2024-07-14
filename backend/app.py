from flask import Flask, request, jsonify
from flask_cors import CORS 
import cv2

import numpy as np
from collections import Counter

app = Flask(__name__)
CORS(app) 
@app.route('/detect_colors', methods=['POST'])
def detect_colors():
    # Check if a file was passed with the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected for uploading'}), 400

    # Read the image file and convert to OpenCV format
    npimg = np.fromfile(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    # Convert image to RGB (OpenCV uses BGR by default)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    # Flatten the image to a list of RGB values
    pixels = img_rgb.reshape((-1, 3))

    # Get the most common colors
    color_counts = Counter(map(tuple, pixels))
    dominant_colors = color_counts.most_common(5)  # Get top 5 most common colors

    # Convert RGB tuples to hex format for easier use in frontend
    dominant_colors_hex = [f'#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}' for rgb, _ in dominant_colors]

    return jsonify({'colors': dominant_colors_hex}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
