import React, {Component} from 'react';
import NumbersList from './NumbersList';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
          <Form />
          <NumbersList />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
