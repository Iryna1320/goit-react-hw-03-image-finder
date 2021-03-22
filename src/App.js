import React, { Component } from 'react';
import pixabayApi from './services/pixabayApi';
import Hearts from './components/Loader';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import ButtonLoadMore from './components/Button';
import './App.css';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    searchgQuery: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
    total: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchgQuery !== this.state.searchgQuery) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchgQuery: query,
      page: 1,
      gallery: [],
      error: null,
      total: null,
    });
  };

  fetchGallery = () => {
    const { searchgQuery, page } = this.state;
    const options = { searchgQuery, page };

    this.setState({ isLoading: true });

    pixabayApi
      .getFetchGallery(options)
      .then(data => {
        if (data.hits.length === 0) {
          alert(`Please, try again...`);
          return;
        } else {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...data.hits],
            page: prevState.page + 1,
            total: data.total,
          }));
        }
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onModalImg = url => {
    this.setState({
      largeImageURL: url,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { gallery, isLoading, largeImageURL, error, showModal, total } = this.state;
    const { toggleModal, onModalImg } = this;
    const galleryLength = gallery.length > 0 && gallery.length < total;
    const renderLoadMoreButton = galleryLength && !isLoading;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h1 className="errorTitle">ERROR</h1>}
        <ImageGallery gallery={gallery} onClick={onModalImg} />
        {isLoading && <Hearts />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        {renderLoadMoreButton && <ButtonLoadMore onClick={this.fetchGallery} />}
      </div>
    );
  }
}
