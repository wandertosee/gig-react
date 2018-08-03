import React, { Component } from 'react';
import '../css/giphy.css';

export default class GiphySearch extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const query = ev.target.elements.query.value;
    this.props.onSearch(query);
  }

  componentDidMount() {
    const { onSearch, initialQuery } = this.props;
    if (initialQuery) {
      onSearch(initialQuery);
    }
  }

  render() {
    const { initialQuery } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search">
            <input type="text" name="query"  placeholder="Search.." defaultValue={initialQuery} className="searchTerm"/>
            <button type="submit" className="searchButton">?</button>
        </form>
        <br />
      </div>
    );
  }
}
