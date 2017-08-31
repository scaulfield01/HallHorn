import React, { Component } from 'react';
import Sound from 'react-sound';
import HornButton from './HornButton';

class HornContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   playStatus: 'initial', // 'A or B'
    // }
    this.state = {
      sounds: [],
      currentPlay: 0,
      loading: false
    }
    this.handleHornClick = this.handleHornClick.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.handlePlaying = this.handlePlaying.bind(this);
  }

  componentWillMount() {
    
  }

  componentWillUpdate(nextProps, nextState) {
    // if(nextState.sounds.length > 1) {
    // }
    console.log(nextProps)
    console.log(nextState)
  } 

  handleHornClick(e) {
    this.setState({ 
      sounds: this.state.sounds.concat({ url: 'airhornNew.mp3', playStatus:'PLAYING' }),
      currentPlay: this.state.currentPlay += 1
    })
  }

  handleLoading(e) {
    // if(this.state.currentPlay === 0) {
      debugger
    // }
  }

  handlePlaying() {
    // if(this.state.loading) {
    //   this.setState({loading: this.state.loading})
    // }
  }

  render() {
    const { sounds, loading } = this.state;
      return (
        <div className="HornContainer">
            {this.loading ? <p>loading</p> : <HornButton handleHornClick={this.handleHornClick}/>}
            {sounds.map((sound, index) => <Sound className="sound" url={sound.url} autoLoad={true} playStatus={sound.playStatus} onLoading={this.handleLoading()} onPlaying={this.handlePlaying} />)}
        </div>
      )
  }
}

export default HornContainer;
