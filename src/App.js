import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  return (
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  );
}

export default App;