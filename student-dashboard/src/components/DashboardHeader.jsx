import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { useStudents } from '../context/StudentContext';

const DashboardHeader = ({ title, tagline }) => {
  const { theme, toggleTheme } = useTheme();
  const { favoriteCount } = useStudents();

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="title-row">
          <div className="title-group">
            <h1>{title}</h1>
            <p>{tagline}</p>
          </div>
          <div className="header-actions">
            {favoriteCount > 0 && (
              <div className="favorite-badge">
                <span>★ {favoriteCount}</span>
              </div>
            )}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#" className="active">Dashboard</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .dashboard-header {
          background: var(--primary-color);
          color: white;
          padding: var(--spacing-lg) 0;
          margin-bottom: var(--spacing-lg);
          box-shadow: var(--shadow-md);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }
        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .favorite-badge {
          background: #f59e0b;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }
        .theme-toggle {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .header-content h1 {
          color: white;
          font-size: var(--font-size-xl);
        }
        .header-nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
        }
        .header-nav ul {
          list-style: none;
          display: flex;
          gap: var(--spacing-lg);
        }
        .header-nav a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }
        .header-nav a:hover, .header-nav a.active {
          color: white;
          border-bottom-color: white;
        }
      `}</style>
    </header>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default DashboardHeader;
