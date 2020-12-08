import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import AddAuthor from './views/AddAuthor';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddAuthor path="/new" />
        <Detail path="/:id" />
        <Update path="/:id/update" />
        
      </Router>
    </div>
  );
}
export default App;