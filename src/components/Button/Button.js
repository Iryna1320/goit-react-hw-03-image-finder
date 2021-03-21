import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.Button}>
      Загрузить ещё
    </button>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonLoadMore;
