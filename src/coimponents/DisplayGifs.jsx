import useApi from '../hooks/useApi';
import ImageItem from './ImageItem';
import PropTypes from 'prop-types'; // Importa PropTypes si deseas agregar validación de props

const DisplayGifs = ({ category }) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${category}&limit=10`;
    const { loading, data } = useApi(url);

    return ( 
        <div className='container-gifs'>
            {
                !loading && data && data.map(img => (
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                ))
            }
        </div>
    );
}

// Prop Types
DisplayGifs.propTypes = {
    category: PropTypes.string.isRequired // Valida que category sea una cadena requerida
};

export default DisplayGifs;
