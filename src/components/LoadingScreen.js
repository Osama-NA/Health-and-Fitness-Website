import React, {useState, useEffect} from 'react';
import '../styles/desktop/LoadingScreen.scss';

// Loads when the app loads to hide the elements initial load
// fades out after 750ms, then the screen is removed from DOM
const LoadingScreen = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoadingScreen(false), 1500);
  }, []);

  return showLoadingScreen && <Screen />
}

const Screen = () => {
  return(
    <div className="loading-screen" >
      <h1>FoodFinder</h1>
    </div >
  )
}

export default LoadingScreen;