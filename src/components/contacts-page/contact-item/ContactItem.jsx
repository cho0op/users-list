import styles from '../Contacts.module.css'

const ContactsItem = ({ id, name, phone, setSelectedId,
    selectedId, contacts, setContacts, isSelected, setIsSelected }) => {

    function handleOnSelectClick(id) {
        if (id !== selectedId) {
            setSelectedId(id)
            setIsSelected(true)
        }
        else {
            setIsSelected(!isSelected)
        }
    }

    function handleOnDeleteClick(id) {
        let stateCopy = contacts.filter(item => item.id !== id)
        setContacts(stateCopy)
    }

    const selectedStyle = {
        background: '#d6d6ff'
    }
    const unSelectedStyle = {
        background: '#eaeafe'
    }

    return (
        <div className={styles.rect} style={id === selectedId && isSelected ? selectedStyle : unSelectedStyle}>
            <div className={styles.contact_item__content}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.phone}>
                    {phone}
                </div>
            </div>
            <div className={styles.contact_item__buttons}>
                <button
                    onClick={() => handleOnSelectClick(id)}
                >
                    <img className={styles.button_img} src={require("../img/done.png")} alt="" />
                </button>
                <button
                    onClick={() => handleOnDeleteClick(id)}
                >
                    <img className={styles.button_img} src={require("../img/delete.png")} alt="" />
                </button>
            </div>

        </div>
    )
}

export default ContactsItem