import styles from '../contacts-local-storage/Contacts.module.css';
import ContactsItem from '../contacts-local-storage/contact-item/ContactItem';
import { useEffect } from 'react';
import ContactCreation from '../contact-creation/ContactCreation';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import handleOnContactClick from '../utils/handleOnContactClick';
import {
    submit,
    remove,
    select,
    move,
    fetchContacts,
    selectors,
} from './contactsSlice';
import {
    DndContext,
    closestCenter,
    useSensor,
    MouseSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const ContactsRedux = () => {
    const navigate = useNavigate();
    const url = '/contactsredux';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const contacts = useSelector(selectors.selectContacts);
    const selectedId = useSelector(selectors.selectSelectedId);
    const isLoading = useSelector(selectors.selectIsLoading);
    const error = useSelector(selectors.selectError);

    const onClickSensor = useSensor(MouseSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 10,
        },
        whileActive: ({ e }) => {
            e.stopPropagation();
        },
    });

    const sensors = useSensors(onClickSensor);

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

    function onSubmit(value) {
        dispatch(
            submit({
                id: nanoid(),
                name: value.name,
                phone: value.phone,
                isManuallyAdded: true,
            })
        );
    }

    function onSelectClick(id) {
        dispatch(select(id));
    }

    function onDeleteClick(id) {
        dispatch(remove(id));
    }

    function onContactClick(id) {
        handleOnContactClick(id, contacts, url, navigate);
    }

    function handleDragEnd(event) {
        dispatch(move(event));
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h3>
                    Redux version!{' '}
                    <NavLink to="/"> --- Go to local storage</NavLink>
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

export default ContactsRedux;
