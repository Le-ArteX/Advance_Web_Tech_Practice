import React from 'react';
import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';
import { useStudents } from '../context/StudentContext';

const StudentCard = ({ name, id, avatar, gpa, major, courses, isFavorite }) => {
  const { toggleFavorite, removeStudent } = useStudents();

  return (
    <div className={`student-card ${isFavorite ? 'favorite' : ''}`}>
      <div className="card-actions">
        <button 
          className="favorite-btn" 
          onClick={() => toggleFavorite(id)}
          aria-label="Toggle Favorite"
        >
          {isFavorite ? '★' : '☆'}
        </button>
        <button 
          className="remove-btn" 
          onClick={() => removeStudent(id)}
          aria-label="Remove Student"
        >
          &times;
        </button>
      </div>

      <div className="card-header">
        <img src={avatar} alt={name} className="avatar" />
        <div className="header-info">
          <h3>{name}</h3>
          <p className="student-id">ID: {id}</p>
        </div>
      </div>
      
      <div className="card-body">
        <p className="major"><strong>Major:</strong> {major}</p>
        
        <div className="stats-row">
          <StatBadge label="GPA" value={gpa} />
          <StatBadge label="Credits" value={120} />
        </div>

        <div className="courses-list">
          {courses.map((course, index) => (
            <CourseTag 
              key={index} 
              courseName={course.name} 
              color={course.color} 
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .student-card {
          background: var(--card-bg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-lg);
          transition: all 0.2s;
          position: relative;
          border: 2px solid transparent;
        }
        .student-card.favorite {
          border-color: #f59e0b;
          background: #fffbeb;
        }
        .card-actions {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          gap: 8px;
        }
        .favorite-btn, .remove-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.1s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
        }
        .favorite-btn { color: #f59e0b; }
        .remove-btn { color: #ef4444; font-size: 1.8rem; }
        .favorite-btn:hover, .remove-btn:hover { transform: scale(1.2); }
        
        .student-card:hover {
          transform: translateY(-4px);
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
        }
        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-color);
        }
        .header-info h3 {
          margin: 0;
          font-size: var(--font-size-lg);
        }
        .student-id {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
        }
        .card-body {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .stats-row {
          display: flex;
          gap: var(--spacing-sm);
          margin: var(--spacing-sm) 0;
        }
        .courses-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: var(--spacing-sm);
        }
      `}</style>
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string
  })).isRequired
};

export default StudentCard;
