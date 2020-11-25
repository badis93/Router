
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Description from './Description';
import MovieCard from './MovieCard';

import {BrowserRouter as Router, Route} from "react-router-dom"

function App () {
 

     return (
         
        <div>

       <Router>
         <Navbar/>
                <Route path="/" exact component={Home} />
                
                <Route path="/Description" exact  />

                <Route path="/MovieCard" exact component={MovieCard} />


              

       </Router>
      
        </div>
      

      
                      
     );
   }



export default App;
