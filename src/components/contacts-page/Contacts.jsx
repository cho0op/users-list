import styles from './Contacts.module.css';
import ContactsItem from './contact-item/ContactItem';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../ui/custom-input/CustomInput';
import { endpoint } from './endpoint';
// import useFetch from './useFetch/useFetch';


const Contacts = () => {
    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                setFunction(data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }, []);

    const [contacts, setContacts] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const { register, handleSubmit } = useForm();
    const [serverData, setServerData] = useState([]);
    function setFunction(data) {
        setContacts(data);
        setServerData(data);
    }

    const contactsLength = contacts.length + 1;
    let nextId = contactsLength + 1;

    function onSubmit(value) {
        let stateCopy = [
            ...contacts,
            {
                id: nextId++,
                name: value.name,
                phone: value.phone,
                isManuallyAdded: true,
            },
        ];
        setContacts(stateCopy);
    }

    function onSelectClick(id) {
        if (id !== selectedId) {
            setSelectedId(id);
            setIsSelected(true);
        } else {
            setIsSelected(!isSelected);
        }
    }

    function onDeleteClick(id) {
        let stateCopy = contacts.filter((item) => item.id !== id);
        setContacts(stateCopy);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CustomInput
                        type="text"
                        name="name"
                        placeholder="Your name"
                        register={register}
                        options={{ required: true }}
                    />
                    <CustomInput
                        type="number"
                        name="phone"
                        placeholder="Your phone"
                        register={register}
                        options={{ required: true, valueAsNumber: true }}
                    />
                    <input type="submit" className={styles.submit} />
                </form>

                {contacts.map((item) => (
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
                        serverData={serverData}
                        onSelectClick={onSelectClick}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contacts;
