import React from 'react';
import './App.css';
import GetCard from './components/GetCard';
import SetCard from './components/SetCard';
import TitleBar from './components/TitleBar';

const App = (): JSX.Element => {
  return (
    <>
      <TitleBar />
      <div className='app-container'>
        <GetCard />
        <SetCard />
      </div>
    </>
  );
};

export default App;
