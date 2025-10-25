# DreamBlox - Dream Journaling Platform

A beginner-friendly React app that lets users submit dreams, parses them into JSON, and can be integrated with a Roblox world.

---

## 🛠️ Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)
- Git (optional, for cloning the repo)
- Roblox Studio (for fetching dreams into your world)

---

## 📂 Project Structure
dreamblox/
├─ public/
├─ src/
│ ├─ App.js
│ ├─ JournalPage.js
│ ├─ PreviewPage.js
│ └─ ...
├─ package.json
└─ README.md


---

## ⚡ Getting Started (React Frontend)

### 1. Install dependencies
Make sure you are inside the `dreamblox` folder:

```bash
cd dreamblox
npm install
npm install react-router-dom

### 2. Start the app
npm start


### 3. Optional: Fix npm audit warnings
npm audit fix

### 4. Using the app
Open the React app in your browser.

Write a dream in the “Write your dream” page.

Click Submit Dream — this sends the dream to your backend API.

Visit the Preview page to see the parsed JSON output.

Roblox Studio can fetch the latest JSON from the backend to generate cubes.

### Backend Integration

Make sure your backend API is running and publicly accessible (localhost is fine for testing).

Update the apiUrl in JournalPage.js and PreviewPage.js to point to your backend.

### 💡 Tips

Enable HTTP Requests in Roblox Studio Game Settings if fetching JSON externally.

Use Replit, Render, or Ngrok to host your backend for public access.

Keep pages/components organized in src/ for easier navigation and scaling.