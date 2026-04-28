import React from 'react';
import { useStudents } from '../context/StudentContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useStudents();

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search by name or major..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <style jsx>{`
        .search-bar {
          margin-bottom: var(--spacing-lg);
          flex: 1;
          min-width: 300px;
        }
        input {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--border-radius);
          border: 2px solid #e2e8f0;
          font-size: var(--font-size-base);
          transition: border-color 0.2s;
        }
        input:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
