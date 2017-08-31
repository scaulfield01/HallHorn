import React, { Component } from 'react';
import HornButton from './HornButton';
import ReactHowler from 'react-howler';
import { BounceLoader } from 'react-spinners';

class HornContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            loading: true
        }
        this.handleHornClick = this.handleHornClick.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleHornClick() {
        this.player.stop();
        this.setState({ playing: true});
    }

    handleLoad() {
        this.setState({ loading: false });
    }

    render() {
        const { loading, playing } = this.state;
        return (
            <div className="HornContainer">
                {loading ? <BounceLoader color={'#02AF92'} /> : <HornButton onTouchStart="" handleHornClick={this.handleHornClick}/>}
                <ReactHowler
                    preload
                    src='airhornNew.mp3'
                    playing={playing}
                    onLoad={this.handleLoad}
                    onLoadError={this.handleLoadError}
                    ref={(ref) => (this.player = ref)}
                />
            </div>
        )
    }
}

export default HornContainer;
