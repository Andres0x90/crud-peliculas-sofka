import React from 'react';

import CreateMovie from './components/CreateMovie';
import ListAll from './components/ListAll';
import UpdateMovie from "./components/UpdateMovie";


function App() 
{
  return (
    <div className="container-fluid">
        <CreateMovie/>
        <UpdateMovie />
        <ListAll />
    </div>
  );
}

export default App; 
