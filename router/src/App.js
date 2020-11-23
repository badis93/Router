
import React from 'react';
import Home from './Home';
import ObjectMovie from './ObjectMovie';
import Description from './Description';

import {BrowserRouter as Router, Route} from "react-router-dom"

function App () {
 

     return (
         
        <div>

       <Router>
         <ObjectMovie/>
                <Route path="/" exact component={Home} />
                
                <Route path="/Description" exact component={Description} />
              

       </Router>
      
        </div>
      

      
                      
     );
   }



export default App;
