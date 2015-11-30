import React, {Component} from 'react';
import getStyles from '../sliderStyles';

export default (props) => {
  const {src} = props.value;
  return (
    <div className="slide">
      <img src={src} style={ getStyles().slideCSS } />
    </div>
  );
}