import PlaceImage from "./place-image/PlaceImage";

export default function Place({ place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}