import React from "react";
import { useDispatch } from "react-redux";
import ACTION_TYPES from "./../../../actions/types";
import styles from './ProductListItem.module.sass';

function ProductListItem(props) {
    const { product } = props;
    const { id, name, price } = product;

    const dispatch = useDispatch();
    const btnAddToCart = (event) => {
        event.preventDefault();
        let input = document.getElementById(id);
        const type = ACTION_TYPES.PRODUCT_ADD_SHOPCART;
        
        if (input.value > 0) {
            product.quantity += parseInt(input.value, 10);
            dispatch({ type, product });
            alert(`добавлено в корзину: ${event.target.name} ${input.value} кг `);
            input.value = null;
        };
    };

    return (
        <li className={styles.listItem} key={id}>
            <span className={styles.spanItem}>{name}</span>
            <span className={styles.spanItem}>цена:{price}</span>
            <span className={styles.spanItem}>количество:<input className={styles.inputItem} id={id} placeholder={"введите кол-во"}></input></span>
            <button className={styles.buttonAddCart} name={name} onClick={btnAddToCart}>add to cart</button>
        </li>
    );
}

export default ProductListItem;
