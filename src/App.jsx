import React from "react";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="floating circle1"></div>
      <div className="floating circle2"></div>
      <div className="floating circle3"></div>

      <div className="card">
        <div className="logos">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
            className="logo spin"
          />
        </div>

        <h1>
          GitHub Codespaces <span>♥</span> React
        </h1>

        <p>Edit <code>src/App.jsx</code> and save to reload.</p>

        <button>Learn React 🚀</button>
      </div>
    </div>
  );
}

export default App;
