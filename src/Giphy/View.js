import React from 'react';
import PropTypes from 'prop-types';
import GiphySearch from './GiphySearch';
import GiphyImages from './GiphyImages';

const View = ({ 
  loading, error, data, initialQuery, onLoad,
  GiphySearch, GiphyImages, Spinner, RenderError, RenderNoResults
}) => (
  <div className='content'>
    <GiphySearch initialQuery={initialQuery} onSearch={onLoad} />
    {loading && <Spinner />}
    {error && <RenderError error={error} />}
    {!loading && !error && !data && <RenderNoResults />}
    {!loading && !error && data && <GiphyImages data={data} />}
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  data: PropTypes.array,
  initialQuery: PropTypes.string.isRequired,
};

View.defaultProps = {
  GiphySearch: GiphySearch,
  GiphyImages: GiphyImages,
};

export default View;
