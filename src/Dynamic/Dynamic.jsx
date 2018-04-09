import React from 'react';

import styles from './dynamic.css';

class Dynamic extends React.Component {
  render(){
    return (
      <div className={styles.dy}><span>i had been loaded use </span><b>Dynamic</b> <i>import</i>.</div>
    )
  }
}

export default Dynamic;