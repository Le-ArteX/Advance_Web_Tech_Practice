import React from 'react';
import PropTypes from 'prop-types';

const StatBadge = ({ label, value }) => {
  return (
    <div className="stat-badge">
      <span className="stat-label">{label}: </span>
      <span className="stat-value">{value}</span>
      <style jsx>{`
        .stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #f1f5f9;
          padding: 4px 12px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          font-size: var(--font-size-sm);
        }
        .stat-label {
          color: var(--text-secondary);
          font-weight: 500;
        }
        .stat-value {
          color: var(--primary-color);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default StatBadge;
