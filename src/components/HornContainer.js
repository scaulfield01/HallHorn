import React, { Component } from 'react';
import Sound from 'react-sound';
import HornButton from './HornButton';

class HornContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: 'initial', // 'A or B'
    }
    this.handleHornClick = this.handleHornClick.bind(this);
  }

  handleHornClick(e) {
    if (this.state.playStatus === 'initial') {
      this.setState({ playStatus: 'A' }); 
    } else if (this.state.playStatus === 'A') {
      this.setState({ playStatus: 'B' });
    } else if (this.state.playStatus === 'B') {
      this.setState({ playStatus: 'A' });
    }
  }

  render() {
    const { playStatus } = this.state;
      return (
        <div className="HornContainer">
          <HornButton handleHornClick={this.handleHornClick}/>
            <Sound
              url={'airhorn.mp3'}
              autoLoad={true}
              playFromPosition={140}
              playStatus={playStatus === 'A' ? 'PLAYING' : 'STOPPED' }
            />
            <Sound
              url={'airhorn.mp3'}
              autoLoad={true}
              playFromPosition={140}
              playStatus={playStatus === 'B' ? 'PLAYING' : 'STOPPED' }
            />
        </div>
      )
  }
}

export default HornContainer;
