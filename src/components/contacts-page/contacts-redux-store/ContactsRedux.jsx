import styles from '../contacts-local-storage/Contacts.module.css';
import ContactsItem from '../contacts-local-storage/contact-item/ContactItem';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomInput from '../../ui/custom-input/CustomInput';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submit, remove, fetchContacts } from './contactsSlice';

const ContactsRedux = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector((state) => state.contacts.contacts);
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const error = useSelector((state) => state.contacts.error);

    if (isLoading) {
        return 'loading...';
    }
    if (error) {
        return error;
    }
    if (!contacts) {
        console.log('there`s no contacts');
        return null;
    }

    const ids = contacts.map((item) => item.id);
    let maxId = Math.max(...ids);

    function onSubmit(value) {
        maxId++;
        dispatch(
            submit({
                id: maxId,
                name: value.name,
                phone: value.phone,
                isManuallyAdded: true,
            })
        );
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
        dispatch(remove(id))
    }

    function onContactClick(id) {
        let contact = contacts.find((item) => item.id === id);
        if (!contact.isManuallyAdded) {
            navigate(`/contactsredux/${id}`);
        } else {
            window.alert('Нет информации о контакте');
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h3>Redux version! <NavLink to='/'> --- Go to local storage</NavLink></h3>
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

export default ContactsRedux;
