import React from 'react';
import RenderNoResults from '../views/RenderNoResults';
import GiphyImage from './GiphyImage';
import '../css/giphy.css';

const GiphyImages = ({ data }) => (
  <div>
    { data ? 
        data.map((element, index) => {
          return <GiphyImage className='image' key={`img${index}`} src={element.src} title={element.title} />
        }) : 
        <RenderNoResults />
    }
  </div>
);

export default GiphyImages;
