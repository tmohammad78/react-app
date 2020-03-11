import React from 'react';
import PropTypes from 'prop-types';

import Selectbox from 'component/Selectbox';

const Sort = ({ onChange }) => {
  const handleSort = value => {
    onChange(value);
  };

  return <Selectbox handleOnChange={handleSort} />;
};
Sort.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Sort;
