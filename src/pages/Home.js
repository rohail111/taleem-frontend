import React from 'react';
import Button from '../components/atoms/Button';

const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Taleem Boilerplate</h1>
      {/* Use Button atom here */}
      <Button label='Click Me' onClick={handleClick} />
    </div>
  );
};

export default Home;
