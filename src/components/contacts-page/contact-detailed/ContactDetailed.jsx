import styles from './ContactDetailed.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { endpoint } from '../endpoint';

const ContactDetailed = () => {
    useEffect(() => {
        fetch(`${endpoint}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setInfo(data);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }, []);

    const { id } = useParams();
    const [info, setInfo] = useState({
        address: { city: '' },
        company: { name: '' },
    });
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
                    navigate('/');
                }}
            >
                Go back
            </button>
        </div>
    );
};

export default ContactDetailed;
