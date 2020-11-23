import React from 'react';
import {Link} from "react-router-dom"
import Description from './Description';
import Home from './Home';
import { useState } from 'react';

function ObjectMovie() {
    const [descrip,setDescrip] = useState("");
    const setdescription = (description) => {
      setDescrip(description);
  
     }
return (
    <div>
                <ul style={{display : "flex"}} >

                    <Link to="/" > 
                    <li style={{marginLeft:10,listStyle:"none"}}>Home</li>
                    </Link>

                    <Link to="/Description">
                    <li style={{marginLeft:10,listStyle:"none"}}>Description</li>
                    </Link>

                </ul>
               
          </div>
);

}


export default ObjectMovie;