from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # allow frontend access

# temporary storage for dreams
latest_dream = {"text": "No dreams yet!"}
os.makeirs("uploads", exist_ok=True)

@app.route("/api/submit", methods=["POST"])
def submit_dream():
    global latest_dream
    
    # data = request.get_json()
    # JSON only handles text I believe?

    dream_text = request.form.get("dreamText")
    image_file = request.files.get("imageFile")
    voice_file = request.files.get("voiceFile")

    image_path = None
    voice_path = None

    if image_file:
        image_path = os.path.join("uploads", image_file.filename)
        image_file.save(image_path)
    
    if voice_file:
        voice_path = os.path.join("uploads", voice_file.filename)
        voice_file.save(voice_path)

    latest_dream = {
        "text": dream_text,
        "image_path": image_path,
        "voice_path": voice_path
    }

    return jsonify({"message": "Dream received!", "dream": latest_dream})

@app.route("/api/latest", methods=["GET"])
def get_latest_dream():
    return jsonify(latest_dream)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
