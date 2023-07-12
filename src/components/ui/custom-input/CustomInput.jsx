import styles from './CustomInput.module.css'

const CustomInput = ({ type, name, placeholder, register, options }) => {
    return (
        <input className={styles.input}
            type={type}
            {...register(name, options)}
            placeholder={placeholder}
        />
    );
};

export default CustomInput;
