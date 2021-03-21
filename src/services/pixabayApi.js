import axios  from 'axios';

const getFetchGallery = ({ searchgQuery = '', page = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchgQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=19760906-677c9d98dcaf25643c58f07c9`
        )
        .then(response => { return response.data.hits });
};

export default { getFetchGallery };
