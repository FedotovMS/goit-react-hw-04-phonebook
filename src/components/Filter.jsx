import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onSearch }) => (
  <input
    type="text"
    name="filter"
    value={value || ''}
    onChange={onSearch}
    placeholder="Search contacts"
  />
);

Filter.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Filter;
