import React from 'react';
import { Greet } from './components/Greet';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Greet name="Overcomer" messageCount={10} />
      <Status status='loading'/>
    </div>
  );
}

export default App;
