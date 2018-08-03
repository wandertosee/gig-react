import React from 'react';
import '../css/giphy.css';

const GiphyImage = ({ src, title = 'title', className}) => (
  <span className={className}>{src && <img src={src} alt={title} />}</span>
);

export default GiphyImage;
