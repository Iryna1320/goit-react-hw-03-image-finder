import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, openModal, largeImageURL }) => {
  return (
    <div className={styles.ImageGalleryItem}>
      <img
        onClick={() => {
          openModal(largeImageURL);
        }}
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
