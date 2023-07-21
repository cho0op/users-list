import styles from './Contacts.module.css';
import ContactsItem from './contact-item/ContactItem';
import { useState } from 'react';
import { USERS } from '../../../endpoints';
import ContactCreation from '../contact-creation/ContactCreation';
import { useNavigate, NavLink } from 'react-router-dom';
import useFetch from './useFetch/useFetch';
import { nanoid } from 'nanoid';
import handleOnContactClick from '../utils/handleOnContactClick';
import {
    DndContext,
    closestCenter,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable';
import withDragAndDrop from '../hocs/withDragAndDrop';

const Contacts = ({ onClickSensor }) => {
    const [selectedId, setSelectedId] = useState(0);
    const navigate = useNavigate();
    const url = '/contacts';

    const {
        data: contacts,
        isPending,
        error,
        setData: setContacts,
    } = useFetch(USERS.USERS());

    const sensors = useSensors(onClickSensor);

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
        if (id === selectedId) {
            setSelectedId(0);
        } else {
            setSelectedId(id);
        }
    }

    function onDeleteClick(id) {
        let stateCopy = contacts.filter((item) => item.id !== id);
        setContacts(stateCopy);
    }

    function onContactClick(id) {
        handleOnContactClick(id, contacts, url, navigate);
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id !== over.id) {
            const activeIndex = contacts.findIndex(
                (item) => item.id === active.id
            );
            const overIndex = contacts.findIndex((item) => item.id === over.id);
            setContacts(() => arrayMove(contacts, activeIndex, overIndex));
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h3>
                    Local storage version!{' '}
                    <NavLink to="/redux"> --- Go to redux</NavLink>
                </h3>
                <ContactCreation onSubmit={onSubmit} />
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    sensors={sensors}
                >
                    <SortableContext
                        items={contacts}
                        strategy={verticalListSortingStrategy}
                    >
                        {contacts.map((item) => (
                            <ContactsItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                phone={item.phone}
                                selectedId={selectedId}
                                onSelectClick={onSelectClick}
                                onDeleteClick={onDeleteClick}
                                onContactClick={onContactClick}
                            />
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};

const ContactsWithDragAndDrop = withDragAndDrop(Contacts);

export default ContactsWithDragAndDrop;
