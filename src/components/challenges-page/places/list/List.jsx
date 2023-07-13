import { places } from '../data.js';
import Place from './place/Place.jsx';
import styles from '../../Challenges.module.css';

export default function List() {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <Place place={place} />
        </li>
    ));
    return <ul className={styles.list}>{listItems}</ul>;
}
