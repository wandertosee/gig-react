import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './GiphySearch';
import GiphyImages from './GiphyImages';

const View = ({ 
  loading, error, data, initialQuery, onLoad,
  SearchInput, GiphyImages, Spinner, RenderError, RenderNoResults
}) => (
  <div className='content'>
    <SearchInput initialQuery={initialQuery} onSearch={onLoad} />
    <section>
      {loading && <Spinner />}
      {error && <RenderError error={error} />}
      {!loading && !error && !data && <RenderNoResults />}
      {!loading && !error && data && <GiphyImages data={data} />}
    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  src: PropTypes.string,
  initialQuery: PropTypes.string.isRequired,
  renderImage: PropTypes.func,
};

View.defaultProps = {
  SearchInput: SearchInput,
  GiphyImages: GiphyImages,
};

export default View;
