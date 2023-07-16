import styles from '../contacts-local-storage/Contacts.module.css';
import CustomInput from '../../ui/custom-input/CustomInput';
import { useForm } from 'react-hook-form';

const ContactCreation = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
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
    );
};

export default ContactCreation;
