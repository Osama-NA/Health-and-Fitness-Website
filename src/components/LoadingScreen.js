import React, { useState, useEffect } from 'react';
import '../styles/desktop/LoadingScreen.scss';

const LoadingScreen = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  //if loading screen if not removed after document loading
  // loading screen is removed after 10 seconds
  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 3000);
  }, []);

  return showLoadingScreen && <Screen />
}


const Screen = () => {
  return (
    <div className="loading-screen" >
      <h1>FoodFinder</h1>
    </div >
  )
}

export default LoadingScreen;