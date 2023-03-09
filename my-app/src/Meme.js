import React from  'react'

export default function Meme(props){
    return(
        <div className="meme-container">
             <nav className="navbar">
              <img src={props.memeLOGO} alt="memeLOGO"/>
            <p>Meme Generator</p>
             </nav>
        </div>
    )
}