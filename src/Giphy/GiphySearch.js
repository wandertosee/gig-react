import React, { Component } from 'react';
import '../css/giphy.css';

export default class SearchInput extends Component {
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
        <section>
          <form onSubmit={this.onSubmit} className="search">
              <input type="text" name="query"  placeholder="Search.." defaultValue={initialQuery} className="searchTerm"/>
              <button type="submit" className="searchButton">
                ?
              </button>
          </form>
          <br />
        </section>
      </div>
    );
  }
}
