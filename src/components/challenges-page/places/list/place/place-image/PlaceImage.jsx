import { getImageUrl } from '../../../utils';
import { useContext } from 'react';
import { ImageSizeContext } from '../../../context/Context';

export default function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
