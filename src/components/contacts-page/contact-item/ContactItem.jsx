import styles from '../Contacts.module.css';

const ContactsItem = ({
    id,
    name,
    phone,
    selectedId,
    isSelected,
    onSelectClick,
    onDeleteClick,
    onContactClick
}) => {

    const selectedStyle = {
        background: '#d6d6ff',
    };
    const unSelectedStyle = {
        background: '#eaeafe',
    };

    return (
        <div
            className={styles.rect}
            style={
                id === selectedId && isSelected
                    ? selectedStyle
                    : unSelectedStyle
            }
            onClick={() => onContactClick(id)}
        >
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
