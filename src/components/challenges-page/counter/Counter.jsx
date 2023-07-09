import { useCounter } from "./useCounter.js";
import styles from '../Challenges.module.css'

export default function Counter() {
  const count = useCounter();
  return (<div>
    <div className={styles.section_name}>Counter</div>
    <div>Seconds passed: {count}</div>
  </div>);
}
