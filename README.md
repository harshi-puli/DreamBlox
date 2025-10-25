# 🌙 DreamBlox — Dream Journaling Platform

A beginner-friendly React + Flask app that lets users submit dreams, stores them, parses them into JSON, and can be integrated with a Roblox world (e.g., visualized as cubes).

---

## 🛠️ Prerequisites

Make sure you have the following installed:

* **Node.js** (v16+ recommended)
* **npm** (comes with Node.js)
* **Python 3.9+**
* **Flask** (`pip install flask flask-cors`)
* **Git** (optional)
* **Roblox Studio** (to visualize dreams as cubes)

---

## 📂 Project Structure

```
dreamblox/
├─ backend/
│  ├─ app.py
│  └─ (stores and serves dream data)
├─ dreamblox/
│  ├─ node_modules/
│  ├─ public/
│  └─ src/
│     ├─ App.js
│     ├─ JournalPage.js
│     ├─ PreviewPage.js
│     └─ ...
├─ requirements.txt
└─ README.md
```

---

## ⚡ Getting Started (React + Flask Together)

### 1️⃣ Create a Virtual Environment for Flask

From the **root folder** (`dreamblox/`):

```bash
python -m venv venv
source venv/bin/activate    # Mac/Linux
venv\Scripts\activate       # Windows
```

Then install backend dependencies:

```bash
pip install flask flask-cors
pip freeze > requirements.txt
```

---

### 2️⃣ Install React Dependencies

From the **frontend folder** (the inner `dreamblox/` directory):

```bash
cd dreamblox
npm install
npm install react-router-dom
npm install concurrently
```

---

### 3️⃣ Update the `package.json`

Open `dreamblox/package.json` and add this to your `"scripts"` section:

#### 🖥️ For Mac/Linux:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "dev": "concurrently \"npm start\" \"cd ../backend && source ../venv/bin/activate && python app.py\""
}
```

#### 🪟 For Windows:

```json
"scripts": {
  "dev": "concurrently \"npm start\" \"cd ../backend && venv\\Scripts\\activate && python app.py\""
}
```

---

### 4️⃣ Start Everything at Once 🚀

From inside the **React app folder** (`dreamblox/`):

```bash
npm run dev
```

✅ This runs:

* React frontend → `http://localhost:3000`
* Flask backend → `http://localhost:5000`

---

### 5️⃣ How the App Works

1. **Write a dream** on the Journal page.
2. **Submit Dream** → Sends data to Flask API (`/api/dreams`).
3. **Preview Page** → Displays JSON output.
4. **Roblox Studio** → Can fetch the JSON to spawn cubes or generate scenes.

---

### ⚙️ Flask Tips

If you see a **CORS error**, add this to your `app.py`:

```python
from flask_cors import CORS
CORS(app)
```

To verify Flask is running:

```bash
curl http://127.0.0.1:5000/api/dreams
```

---

### 💾 Example Minimal Flask `app.py`

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dreams = []

@app.route("/api/dreams", methods=["GET", "POST"])
def handle_dreams():
    if request.method == "POST":
        data = request.get_json()
        dreams.append(data)
        return jsonify({"message": "Dream added", "dream": data}), 201
    return jsonify(dreams)

if __name__ == "__main__":
    app.run(debug=True)
```

---

### 🧩 Roblox Integration (Optional)

1. In Roblox Studio, create a Script inside **ServerScriptService**.
2. Use:

   ```lua
   local HttpService = game:GetService("HttpService")
   local dreams = HttpService:GetAsync("http://127.0.0.1:5000/api/dreams")
   local decoded = HttpService:JSONDecode(dreams)
   print(decoded)
   ```
3. Each dream can be turned into a cube or scene object!

---