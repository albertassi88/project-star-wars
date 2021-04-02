import React from 'react';
import '../css/Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div class="center">
        <div class="text">Loading....</div>
        <div class="ring"></div>
      </div>
    );
  }
}

export default Loading;