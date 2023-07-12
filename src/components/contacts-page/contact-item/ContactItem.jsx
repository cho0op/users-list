import styles from '../Contacts.module.css';
import { useNavigate } from 'react-router-dom';

const ContactsItem = ({
    id,
    name,
    phone,
    setSelectedId,
    selectedId,
    contacts,
    setContacts,
    isSelected,
    setIsSelected,
    serverData,
}) => {
    const navigate = useNavigate();

    function handleOnSelectClick(id) {
        if (id !== selectedId) {
            setSelectedId(id);
            setIsSelected(true);
        } else {
            setIsSelected(!isSelected);
        }
    }

    function handleOnDeleteClick(id) {
        let stateCopy = contacts.filter((item) => item.id !== id);
        setContacts(stateCopy);
    }

    function handleOnContactClick(id) {
        let realId = id - 1;
        if (
            serverData[realId] === undefined ||
            contacts[realId] === undefined
        ) {
            return;
        }

        const contactsKeys = Object.keys(contacts[realId]);
        const serverDataKeys = Object.keys(serverData[realId]);

        // у вручную добавленных атрибутов меньше
        if (contactsKeys.length === serverDataKeys.length) {
            navigate(`/contacts/${id}`);
        }
    }

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
            onClick={() => handleOnContactClick(id)}
        >
            <div className={styles.contact_item__content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.phone}>{phone}</div>
            </div>
            <div className={styles.contact_item__buttons}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOnSelectClick(id);
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
                        handleOnDeleteClick(id);
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
