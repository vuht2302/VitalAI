import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import WorkoutPlanner from './pages/WorkoutPlanner';
import Progress from './pages/Progress';
import Nutrition from './pages/Nutrition';
import Blog from './pages/Blog';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="workouts" element={<WorkoutPlanner />} />
          <Route path="progress" element={<Progress />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="blog" element={<Blog />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
