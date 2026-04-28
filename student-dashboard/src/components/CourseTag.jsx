import React from 'react';
import PropTypes from 'prop-types';

const CourseTag = ({ courseName, color }) => {
  const style = {
    backgroundColor: color || 'var(--primary-color)',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '20px',
    fontSize: 'var(--font-size-sm)',
    fontWeight: '500',
    display: 'inline-block',
    margin: '2px'
  };

  return (
    <span className="course-tag" style={style}>
      {courseName}
    </span>
  );
};

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default CourseTag;
