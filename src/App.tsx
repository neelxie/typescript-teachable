import React from 'react';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Overcomer" messageCount={10} />
    </div>
  );
}

export default App;
