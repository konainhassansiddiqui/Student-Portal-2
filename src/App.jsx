import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Welcome from './components/Welcome.jsx';
import StudentCard from './components/StudentCard.jsx';

const students = [
 { id: 1,name: 'Rapunzel', picture: '/src/assets/Rupunzal.jpg', email: 'rapunzel@student.com', phone: '0300-1112233'},
  { id: 2, name: 'Ladybug', picture: '/src/assets/ladybug.jpg', email: 'ladybug@student.com', phone: '0300-2223344' },
  { id: 3, name: 'Jasmine', picture: '/src/assets/jasmine.jpg', email: 'jasmine@student.com', phone: '0300-3334455' },
  { id: 4, name: 'Elsa', picture: '/src/assets/elsa.jpg', email: 'elsa@student.com', phone: '0300-4445566' },
];

export default function App() {
  const [views, setViews] = useState({});
  const [visibleDetails, setVisibleDetails] = useState({});

  function increaseViews(id) {
    setViews((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
  }

  function toggleDetails(id) {
    setVisibleDetails((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <div className="app">
      <Navbar />
      <main className="page-content">
        <Welcome />
        <section className="student-grid" aria-label="Student cards">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              views={views[student.id] || 0}
              onViewProfile={() => increaseViews(student.id)}
              showDetails={Boolean(visibleDetails[student.id])}
              onToggleDetails={() => toggleDetails(student.id)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
