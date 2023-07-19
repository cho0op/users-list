import styles from '../Contacts.module.css';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ContactsItem = ({
    id,
    name,
    phone,
    selectedId,
    onSelectClick,
    onDeleteClick,
    onContactClick,
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: id });
    const selectedStyle = {
        background: '#d6d6ff',
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const unSelectedStyle = {
        background: '#eaeafe',
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            className={styles.rect}
            style={id === selectedId ? selectedStyle : unSelectedStyle}
            onClick={() => onContactClick(id)}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <div className={styles.drag_icon}>
                <img
                    className={styles.drag_img}
                    src={require('../img/drag.png')}
                    alt=""
                />
            </div>
            <div className={styles.contact_item__content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.phone}>{phone}</div>
            </div>
            <div className={styles.contact_item__buttons}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelectClick(id);
                    }}
                >
                    <img
                        className={styles.button_img}
                        src={require('../img/done.png')}
                        alt=""
                    />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDeleteClick(id);
                    }}
                >
                    <img
                        className={styles.button_img}
                        src={require('../img/delete.png')}
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
};

export default ContactsItem;
