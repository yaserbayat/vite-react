import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from 'src/routes/Login';
import WebsiteContainer from 'src/routes/Website';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<WebsiteContainer />} />
      </Routes>
    </div>
  );
};

export default App;
