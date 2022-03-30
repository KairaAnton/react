import React from "react";
import { useDispatch } from "react-redux";
import ACTION_TYPES from "./../../../actions/types";
import styles from "./ShopCartList.module.sass";
import sumProduct from "./sumProduct";

function ShopCartList(props) {
    const { product, btnOnClick } = props;
    const { id, name, price, quantity } = product;
    const dispatch = useDispatch();

    const changeValue = (event) => {
        if (event.target.value > 0) {
            product.quantity = parseInt(event.target.value, 10);
            dispatch({ type: ACTION_TYPES.PRODUCT_ADD_SHOPCART, product });
        };
    };
    const clickOnInput = e => e.target.value = 0;
    return (
        <li className={styles.listItem} key={id}>
            <h1> {name}</h1>
            <span> price: {price}</span>
            <span>quantity: <input id={id} value={quantity} onClick={clickOnInput} onChange={changeValue} ></input></span>
            <span>sum: {sumProduct(product)}</span>
            <button onClick={btnOnClick}>{'Remove from Cart'}</button>
        </li>
    );
};

export default ShopCartList;
