import jsonLoader from './jsonLoader';
import apis from '../config/apis';

const processData = response => {
  return response.data.map((e) => {
    return { src: e.images.fixed_height_downsampled.url, title: e.title };
  });
};

const giphyLoader = (query) => {
  const encodedQuery = encodeURIComponent(query);
  const giphy = apis.giphy;
  const url = `${giphy.url}${giphy.key}&q=${encodedQuery}`;

  return jsonLoader(url, processData)
};

export default giphyLoader;
