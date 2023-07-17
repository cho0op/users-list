import styles from './ContactDetailed.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { USERS } from '../../../../endpoints';
import useFetch from '../useFetch/useFetch';

const ContactDetailed = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const { data: info, isPending, error, setData: setInfo} = useFetch(USERS.USER_BY_ID(id));
    if (isPending) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>error: {error}</div>;
    }
    if (!info) {
        return null;
    }

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
