import react from 'react';
import Message from './message';
import Card from './card';
import './App.css';

function App(){
  return(

  <div className='App'>
   <div className='page-grid'>
     <Message />
     <Card />
    </div>
  </div>
  )
}

export default App;