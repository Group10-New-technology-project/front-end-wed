import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
