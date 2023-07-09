import { useState } from 'react';
import Input from './input/Input';
import styles from '../Challenges.module.css'

export default function Form() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);
  return (
    <div >
      <div className={styles.section_name}>Form</div>
      <div className={styles.form_section}>
        <button className={styles.show_form_button} onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
        {show && (
          <>
            <label>
              Enter your name:
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              <input
                type="checkbox"
                checked={upper}
                onChange={e => setUpper(e.target.checked)}
              />
              Make it uppercase
            </label>
            <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
          </>
        )}
      </div>
    </div>
  );
}
