from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for testing

# temporary storage for dreams
latest_dream = {"text": "No dreams yet!"}

@app.route("/api/submit", methods=["POST"])
def submit_dream():
    global latest_dream
    data = request.get_json()
    latest_dream = data
    return jsonify({"message": "Dream received!", "dream": latest_dream})

@app.route("/api/latest", methods=["GET"])
def get_latest_dream():
    return jsonify(latest_dream)

if __name__ == "__main__":
    app.run(debug=True, port=5000, host='127.0.0.1')