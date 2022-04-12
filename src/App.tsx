import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className=''>
        <NavBar />
        <div>
          <p>Hello, Testing Live Server</p>
        </div>
        <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button>
      </div>
    );
  }
}

export default App;