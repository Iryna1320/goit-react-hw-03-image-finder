import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {gallery.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            openModal={onClick}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
