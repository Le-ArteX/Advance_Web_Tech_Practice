import React, { useState } from 'react';
import { useStudents } from '../context/StudentContext';

const AddStudentForm = () => {
  const { addStudent, students } = useStudents();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    major: '',
    gpa: '',
    courses: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.id.trim()) newErrors.id = 'ID is required';
    else if (!/^\d+$/.test(formData.id)) newErrors.id = 'ID must be numeric';
    else if (students.some(s => s.id === formData.id)) newErrors.id = 'ID must be unique';

    if (!formData.major.trim()) newErrors.major = 'Major is required';
    
    const gpaNum = parseFloat(formData.gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      newErrors.gpa = 'GPA must be between 0 and 4.0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newStudent = {
        ...formData,
        gpa: parseFloat(formData.gpa),
        isFavorite: false,
        avatar: `https://i.pravatar.cc/150?u=${formData.id}`,
        courses: formData.courses.split(',').map(c => ({
          name: c.trim(),
          color: `#${Math.floor(Math.random()*16777215).toString(16)}`
        })).filter(c => c.name !== '')
      };
      addStudent(newStudent);
      setFormData({ name: '', id: '', major: '', gpa: '', courses: '' });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Student ID</label>
            <input 
              type="text" 
              value={formData.id}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
              className={errors.id ? 'error' : ''}
            />
            {errors.id && <span className="error-msg">{errors.id}</span>}
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input 
              type="number" step="0.1"
              value={formData.gpa}
              onChange={(e) => setFormData({...formData, gpa: e.target.value})}
              className={errors.gpa ? 'error' : ''}
            />
            {errors.gpa && <span className="error-msg">{errors.gpa}</span>}
          </div>
        </div>

        <div className="form-group">
          <label>Major</label>
          <input 
            type="text" 
            value={formData.major}
            onChange={(e) => setFormData({...formData, major: e.target.value})}
            className={errors.major ? 'error' : ''}
          />
          {errors.major && <span className="error-msg">{errors.major}</span>}
        </div>

        <div className="form-group">
          <label>Courses (comma separated)</label>
          <input 
            type="text" 
            placeholder="React, Node, CSS"
            value={formData.courses}
            onChange={(e) => setFormData({...formData, courses: e.target.value})}
          />
        </div>

        <button type="submit" className="submit-btn">Add Student</button>
      </form>

      <style jsx>{`
        .form-container {
          background: var(--card-bg);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-md);
          margin-bottom: var(--spacing-lg);
        }
        h3 { margin-bottom: var(--spacing-md); }
        .form-group { margin-bottom: var(--spacing-md); display: flex; flex-direction: column; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-md); }
        label { font-weight: 500; margin-bottom: 4px; font-size: var(--font-size-sm); }
        input {
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: var(--font-size-base);
        }
        input.error { border-color: #ef4444; }
        .error-msg { color: #ef4444; font-size: 12px; margin-top: 2px; }
        .submit-btn {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .submit-btn:hover { background: var(--primary-dark); }
      `}</style>
    </div>
  );
};

export default AddStudentForm;
