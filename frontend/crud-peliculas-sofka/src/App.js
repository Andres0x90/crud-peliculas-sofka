import React from 'react';

import CreateMovie from './components/CreateMovie';
import UpdateMovie from "./components/UpdateMovie";


function App() 
{
  return (
    <div className="container-fluid">
        <CreateMovie/>
        <UpdateMovie />
    </div>
  );
}

export default App; 
