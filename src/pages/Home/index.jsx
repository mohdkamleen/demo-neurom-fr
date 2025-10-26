import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="phone-screen center-vertical">
      <header className="phone-header">Home</header>

      <main className="phone-body">
        <h3>No readings</h3>
        <p>Log food data to see status and time-in-range here.</p>

        <div className="home-actions">
          <button className="ghost-button">Predict Blood Sugar</button>
          <button className="primary-button">
            + Add Food Data
          </button>
        </div>

        <div className="unlock-area">
          <p>Unlock by adding data</p>
          <div className="lock-icon">🔒</div>
        </div>

        <Link to="/" className="link-inline">Back to Welcome</Link>
      </main>

      <footer className="phone-footer">Last synced: just now</footer>
    </div>
  );
}
