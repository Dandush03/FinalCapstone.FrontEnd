import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { addItem, removeItem } from '../actions/loadingAction';

export default function Img({ imgUrl, imgAlt, imgClass }) {
  const dispatch = useDispatch();

  const loadedHandler = () => {
    dispatch(removeItem());
  };

  const loadingHandler = () => {
    dispatch(addItem());
  };

  return (
    <img
      src={imgUrl}
      alt={imgAlt}
      className={imgClass}
      onLoad={loadedHandler}
      onLoadCapture={loadingHandler}
    />
  );
}

Img.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgClass: PropTypes.string,
};

Img.defaultProps = {
  imgClass: null,
};
