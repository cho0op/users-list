import ShoppingCart from "./shopping-cart/ShoppingCart"
import ToDoList from "./todo-list/ToDoList"
import styles from './UpdatingArrays.module.css'

const UpdatingArrays = () => {
    return (
        <div className={styles.content}>
            <ShoppingCart />
            <ToDoList />
        </div>
    )
}

export default UpdatingArrays
