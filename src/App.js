import React, { PureComponent } from 'react';

import Display from './components/Display';
import styles from './App.module.scss';

class App extends PureComponent {

  state = {
    displayState: [0, 0, 0, 0],
    decimal: 0,
  };

  _binaryToDecimal = binaryArray => {
    return binaryArray.reverse().reduce((acc = 0, curr, index) => {
      if (!curr) return acc;
      return acc + Math.pow(2, index);
    });
  }

  _onChangeButton = index => {
    const newState = [...this.state.displayState];
    newState[index] = Number(!newState[index]);
    const decimal = this._binaryToDecimal([...newState]);
    this.setState({ displayState: newState, decimal });
  };

  render() {
    const { displayState, decimal } = this.state;
    return (
      <div className={styles.App}>
        <div className={styles.displayCard}>

          <span className={styles.decimal}>{decimal}</span>
          <Display displayState={displayState} />
          <div className={styles.buttonContainer}>
            <div className={styles.binaryButton} onClick={() => this._onChangeButton(0)}><span>{displayState[0]}</span></div>
            <div className={styles.binaryButton} onClick={() => this._onChangeButton(1)}><span>{displayState[1]}</span></div>
            <div className={styles.binaryButton} onClick={() => this._onChangeButton(2)}><span>{displayState[2]}</span></div>
            <div className={styles.binaryButton} onClick={() => this._onChangeButton(3)}><span>{displayState[3]}</span></div>
          </div>
        </div>
      </div>

    );
  }

}

export default App;
