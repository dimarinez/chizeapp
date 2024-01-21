import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>In progress...</h1>
      <p>For privacy policy, go here: <Link to="/privacy-policy">Privacy Policy</Link></p>
    </div>
  );
};

export default HomePage;
