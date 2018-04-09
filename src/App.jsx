import React from 'react';
import AsyncComponent from './AsyncComponent';

import styles from './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(styles);
    let Com = AsyncComponent('./Dynamic/Dynamic.jsx');
    return (
      <div>
        <p className={styles.red}>hello world</p>
        <Com />
      </div>
    )
  }
};

export default App;
