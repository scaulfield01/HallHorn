import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HornButton extends Component {

  render() {
    return (
    	<div className="HornButton" onClick={this.props.handleHornClick}>
	        <img src="demostration.svg" alt="Home" />
    	</div>
	)
  }
}

HornButton.propTypes = {
  handleHornClick: PropTypes.func.isRequired
};

export default HornButton;
