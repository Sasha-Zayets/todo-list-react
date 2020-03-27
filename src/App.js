import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { Provider } from 'react-redux';
import { store } from './redux/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TodoContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;