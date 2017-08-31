import React, { Component } from 'react';
import { BounceLoader } from 'react-spinners';
import PropTypes from 'prop-types';

class ActionContainer extends Component {

  render() {
  	const buttonObjects = {	
  		horn: {className: 'HornButton', source: 'demonstration.svg'},
		error: {className: 'ErrorButton', source: 'warning.svg'}
	};
	const elementToDisplay
	switch(this.props.type) {
		case 'loading':
		    elementToDisplay = <BounceLoader color={'#02AF92'} />; 
	        break;
	    case 'playing':
			elementToDisplay = (
				<div className="HornButton" onClick={this.props.handleHornClick}>
				    <img src="demostration.svg" alt="horn" />
				</div>
			);  
        	break;
        case 'error':
             elementToDisplay = (
             	<div className="HornButton" onClick={this.props.handleHornClick}>
             	    <img src="warning.svg" alt="warning" />
             	</div>
             ); 
            break;
	    default:
	}
    return (
    	<div className="HornButton" onClick={this.props.handleHornClick}>
	        <img src="demostration.svg" alt="Home" />
    	</div>
	)
  }
}

HornButton.propTypes = {
  handleClick: PropTypes.func.isRequired
  type: PropTypes.func.isRequired
};

export default HornButton;
