import styles from './Contacts.module.css';
import data from './data'

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {data.map(item => (
                    <ContactsItem key={item.id} name={item.name} phone={item.phone} />
                ))}
            </div>
        </div>
    )
}

const ContactsItem = ({ name, phone }) => {
    return (
        <div className={styles.rect}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.phone}>
                {phone}
            </div>
        </div>
    )
}

export default Contacts