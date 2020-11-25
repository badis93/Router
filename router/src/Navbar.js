import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    
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


export default Navbar;