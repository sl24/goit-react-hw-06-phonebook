import PropTypes from 'prop-types';

import FilterInput from './FilterStyles';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Enter name for search"
      value={filter}
      onChange={onChange}
    ></FilterInput>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
