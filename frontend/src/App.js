import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

function App() {
  return (
    <Button variant="raised" color="blue">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));