import React from 'react'
import './style.css';
import Meme from "./Meme"


// import Meme image
import memeLOGO from "./bg1.jpg"


 export function App() {
  return (
    <div className='app-container'>
      <Meme memeLOGO={memeLOGO} />
    </div>
  );
}

export default App;
