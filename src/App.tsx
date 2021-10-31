import React from 'react';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Greet name="Overcomer" messageCount={10} />
      <Status status='loading'/>
      <Button handleClick={(event, id) => {
        console.log(event, id);
      }}/>
    </div>
  );
}

export default App;
