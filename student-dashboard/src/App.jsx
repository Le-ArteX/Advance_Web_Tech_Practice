import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { StudentProvider, useStudents } from './context/StudentContext';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import AddStudentForm from './components/AddStudentForm';

const DashboardContent = () => {
  const { students, loading, notification } = useStudents();
  const { theme } = useTheme();

  useEffect(() => {
    document.title = `Dashboard - ${students.length} Students`;
  }, [students.length]);

  return (
    <div className={`app-container ${theme}`}>
      <DashboardHeader 
        title="Student Dashboard" 
        tagline="Manage your student records efficiently" 
      />
      
      <main className="container">
        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}

        <AddStudentForm />

        <div className="controls-row">
          <SearchBar />
          <SortControls />
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading Students...</p>
          </div>
        ) : (
          <div className="students-grid">
            {students.map(student => (
              <StudentCard 
                key={student.id} 
                {...student} 
              />
            ))}
          </div>
        )}
        
        {!loading && students.length === 0 && (
          <div className="no-results">
            <p>No students found matching your search.</p>
          </div>
        )}
      </main>

      <style jsx>{`
        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #10b981;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          box-shadow: var(--shadow-md);
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .controls-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }
        .students-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }
        .loading-spinner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .no-results {
          text-align: center;
          padding: var(--spacing-lg);
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <StudentProvider>
        <DashboardContent />
      </StudentProvider>
    </ThemeProvider>
  );
};

export default App;
