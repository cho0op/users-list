import styles from './Contacts.module.css';
import ContactsItem from './contact-item/ContactItem';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../ui/custom-input/CustomInput';
import { USERS } from '../../../endpoints';
import { useNavigate, NavLink } from 'react-router-dom';
import useFetch from './useFetch/useFetch';
import { nanoid } from 'nanoid';

const Contacts = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const {
        data: contacts,
        isPending,
        error,
        setData: setContacts,
    } = useFetch(USERS.USERS());
    if (isPending) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>error: {error}</div>;
    }
    if (!contacts) {
        return null;
    }

    function onSubmit(value) {
        let stateCopy = [
            ...contacts,
            {
                id: nanoid(),
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

    function onContactClick(id) {
        let contact = contacts.find((item) => item.id === id);
        if (!contact.isManuallyAdded) {
            navigate(`/contacts/${id}`);
        } else {
            window.alert('Нет информации о контакте');
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h3>Local storage version! <NavLink to='/redux'> --- Go to redux</NavLink></h3>
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
                        isSelected={isSelected}
                        onSelectClick={onSelectClick}
                        onDeleteClick={onDeleteClick}
                        onContactClick={onContactClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contacts;
