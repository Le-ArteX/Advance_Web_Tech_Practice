import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const StudentContext = createContext();

const INITIAL_DATA = [
  {
    id: "S101",
    name: "Alice Johnson",
    major: "Computer Science",
    gpa: 3.8,
    isFavorite: false,
    avatar: "https://i.pravatar.cc/150?u=S101",
    courses: [{ name: "Web Dev", color: "#3b82f6" }, { name: "React", color: "#6366f1" }]
  },
  {
    id: "S102",
    name: "Bob Smith",
    major: "Mechanical Engineering",
    gpa: 3.5,
    isFavorite: false,
    avatar: "https://i.pravatar.cc/150?u=S102",
    courses: [{ name: "Thermodynamics", color: "#ef4444" }, { name: "CAD", color: "#f59e0b" }]
  }
];

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(students.length === 0);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [notification, setNotification] = useState(null);

  // Persistence
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Initial Fetch Simulation
  useEffect(() => {
    if (students.length === 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setStudents(INITIAL_DATA);
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const addStudent = (student) => {
    setStudents(prev => [student, ...prev]);
    showNotification(`Student ${student.name} added successfully!`);
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    showNotification("Student removed.");
  };

  const toggleFavorite = (id) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, isFavorite: !s.isFavorite } : s
    ));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredAndSortedStudents = useMemo(() => {
    let result = students.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.major.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'gpa') result.sort((a, b) => b.gpa - a.gpa);
    
    return result;
  }, [students, searchQuery, sortBy]);

  const favoriteCount = students.filter(s => s.isFavorite).length;

  return (
    <StudentContext.Provider value={{
      students: filteredAndSortedStudents,
      totalCount: students.length,
      favoriteCount,
      loading,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      addStudent,
      removeStudent,
      toggleFavorite,
      notification
    }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
