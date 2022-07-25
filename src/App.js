
import './App.css';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Home} from './component/Home';

function App() {

  let styleObj ={
    display:"flex", 
    flexWrap:"wrap", 
    alignItem:"center"
    }

   return(
    <div className="responsive" style={styleObj}>
      <Home/>
    </div>
   );
}

export default App;
