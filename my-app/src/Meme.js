import React from  'react'

export default function Meme(props){
    return(
        <div className="meme-container">
             <nav className="navbar">
              <img  className="memeLOGO"src={props.memeLOGO} alt="memeLOGO"/>
            <p className="title">Meme Generator</p>
             </nav>

             <div className="input-field" >
                <input type="text" placeholder="Enter the first line"/>
                  <input type="text" />

             </div>
        </div>
    )
}