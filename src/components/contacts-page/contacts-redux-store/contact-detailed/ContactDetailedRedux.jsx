import styles from './ContactDetailed.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchContactById, selectInfo } from './contactDetailedSlice';
import { useEffect } from 'react';

const ContactDetailedRedux = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const info = useSelector(selectInfo)

    useEffect(() => {
        dispatch(fetchContactById(id));
    }, [dispatch, id]);

    let navigate = useNavigate();

    return (
        <div className={styles.content}>
            <div className={styles.rect}>
                <div className={styles.name}>
                    {info.name} aka "{info.username}"
                </div>
                <div className={styles.phone}>Phone number: {info.phone}</div>
                <div className={styles.email}>E-mail: {info.email}</div>
                <div className={styles.address}>City: {info.address.city}</div>
                <div className={styles.company}>
                    Company: {info.company.name}
                </div>
            </div>
            <button
                className={styles.goback_button}
                onClick={() => {
                    navigate('/redux');
                }}
            >
                Go back
            </button>
        </div>
    );
};

export default ContactDetailedRedux;
