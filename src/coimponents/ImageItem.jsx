
import PropTypes from 'prop-types';

const ImageItem = ({ title, url }) => {
    return ( 
        <div>
            <img src={url} alt={`Imagen: ${title}`} />
            <p>{title}</p>
        </div>
    );
}

// Prop Types
ImageItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired 
};

export default ImageItem;
