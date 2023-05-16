import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onSearch }) => (
  <input
    type="text"
    name="filter"
    value={filter || ''}
    onChange={onSearch}
    placeholder="Search contacts"
  />
);

Filter.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Filter;
