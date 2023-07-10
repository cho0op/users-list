import styles from './Contacts.module.css';
import data from './data'
import ContactsItem from './contact-item/ContactItem';
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const Contacts = () => {
    const [contacts, setContacts] = useState(data)
    const [selectedId, setSelectedId] = useState(0)
    const [isSelected, setIsSelected] = useState(false)
    const { register, handleSubmit, } = useForm();

    let nextId = contacts.length + 1 // uh doesnt work correctly

    function onSubmit(value) {
        let stateCopy = [...contacts,
        {
            id: nextId++,
            name: value.name,
            phone: value.phone
        }]
        setContacts(stateCopy)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder='Your name' />
                    <input type="number" {...register("phone", { required: true, valueAsNumber: true })} placeholder='Your phone' />
                    <input type="submit" className={styles.submit} />
                </form>

                {contacts.map(item => (
                    <ContactsItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        phone={item.phone}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        contacts={contacts}
                        setContacts={setContacts}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                ))}
            </div>
        </div>
    )
}

export default Contacts