import React from 'react';

export default function StudentCard({ student, views, onViewProfile, showDetails, onToggleDetails }) {
  return (
    <article className="student-card">
      <img className="student-picture" src={student.picture} alt={`${student.name} portrait`} />
      <div className="student-content">
        <h2>{student.name}</h2>
        <p className="student-course">Student</p>
        <div className="button-row">
          <button className="view-button" onClick={onViewProfile}>View Profile ({views})</button>
          <button className="details-button" onClick={onToggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <div className="details-box">
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
          </div>
        )}
      </div>
    </article>
  );
}
