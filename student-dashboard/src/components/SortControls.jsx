import React from 'react';
import { useStudents } from '../context/StudentContext';

const SortControls = () => {
  const { sortBy, setSortBy } = useStudents();

  return (
    <div className="sort-controls">
      <button 
        className={sortBy === 'default' ? 'active' : ''} 
        onClick={() => setSortBy('default')}
      >
        Default
      </button>
      <button 
        className={sortBy === 'name' ? 'active' : ''} 
        onClick={() => setSortBy('name')}
      >
        Name (A-Z)
      </button>
      <button 
        className={sortBy === 'gpa' ? 'active' : ''} 
        onClick={() => setSortBy('gpa')}
      >
        GPA (High to Low)
      </button>

      <style jsx>{`
        .sort-controls {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }
        button {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }
        button:hover {
          background: #f8fafc;
        }
        button.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
      `}</style>
    </div>
  );
};

export default SortControls;
