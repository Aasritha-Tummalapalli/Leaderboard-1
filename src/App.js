import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from './images.jpg';

const MAX_POINTS = 2000;

function calculateProgress(points) {
  return (points / MAX_POINTS) * 100;
}

function ProfileModal() {
  const stats = [
    { period: 'Daily', points: 77 },
    { period: 'Weekly', points: 487 },
    { period: 'Monthly', points: 1443 },
  ];

  return (
    <div className="profile-modal">
      <div className="profile-header">
        <button className="close-button">&times;</button>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">AMIT RANA</h2>
          <p className="profile-username">@amitranayft</p>
          <div className="profile-badge">
            <i className="fas fa-male"></i> Male
          </div>
          <div className="profile-member-info">
            <i className="fas fa-calendar-alt"></i> Member Since: Sep 2024
          </div>
        </div>
        <div className="profile-statistics">
          <h3>Leaderboard Statistics</h3>
          <div className="stat-cards">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <p>{stat.period}</p>
                <p>Points: {stat.points}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${calculateProgress(stat.points)}%` }}
                  />
                </div>
                <div className="points-container">
                  <i className="fas fa-star"></i> {Math.round(stat.points / 100)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ProfileModal />
    </div>
  );
}

export default App;
