import React, {Component} from 'react';
import getStyles from '../sliderStyles.js';

export default class Slide extends Component {
	propTypes: {
		value: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<div className="slide">
				<img src={this.props.value.src} style={getStyles().slideCSS} />
			</div>
		);
	}
}