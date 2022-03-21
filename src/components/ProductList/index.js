import React from 'react';
import ACTION_TYPES from '../../actions/types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./ProductList.module.sass";

import { mdiCart } from '@mdi/js';
import Icon from '@mdi/react';

function ProductList() {
    const product = useSelector(state => state.product);
    return (
        <ul className={styles.list}>
            <Link to="/Cart">
                <Icon path={mdiCart} size={3} color="red" />
            </Link>

            {product.map(p => <ProductListItem product={p} key={p.id} />)}
        </ul>
    )
}

function ProductListItem(props) {
    const { product } = props;
    const { id, name, price } = product;
    const dispatch = useDispatch();
    const btnAddToCart = (event) => {
        event.preventDefault();
        let input = document.getElementById(id);
        if (input.value > 0) {
            product.quantity = input.value;
            dispatch({ type: ACTION_TYPES.PRODUCT_ADD_SHOPCART, product });
            alert(`добавлено в корзину: ${name} ${input.value} кг `);
            input.value = null;
        }
    };
    return (
        <li className={styles.listItem} key={id}>
            <span>{name}</span>
            <span>цена:{price}</span>
            <span>количество:<input id={id} placeholder={"введите кол-во"}></input></span>
            <button onClick={btnAddToCart}>add to cart</button>
        </li>
    );
}

export default ProductList;
