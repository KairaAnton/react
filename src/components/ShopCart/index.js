import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ACTION_TYPES from "../../actions/types";
import styles from "./ShopCart.module.sass";

const sumProduct = (prod) => {
    const { name, quantity, price } = prod;
    if (name === "Папайя") {
        const withtDiscount = Math.floor(quantity / 3) * 2.5;
        const withoutDiscount = quantity % 3;
        return (withtDiscount + withoutDiscount) * price;
    } else {
        return price * quantity;
    }
}

function ShopCart() {

    const dispatch = useDispatch();
    const shopCart = useSelector(state => state.shopCart);
    const purchaseAmount = () => {
        let sum = 0;
        for (let prod of shopCart) {
            sum += sumProduct(prod);
        }
        return sum;
    }

    const viewList = () => {
        return shopCart.map(p => {
            return <ShopCartList product={p} key={p.id} btnOnClick={(event) => {
                dispatch({ type: ACTION_TYPES.PRODUCT_DELETE_SHOPCART, p })
            }} />
        })
    }

    return (<>
        <ul className={styles.list}>
            <Link className={styles.link} to="/"> Назад к покупкам</Link>
            <span>сумма покупки: {purchaseAmount()}</span>
            {viewList()}

        </ul>
        
    </>
    )

}

function ShopCartList(props) {
    const { product, btnOnClick } = props;
    const { id, name, price, quantity } = product;

    return (
        <li className={styles.listItem} key={id}>
            <h1> {name}</h1>
            <span> price: {price}</span>
            <span>quantity: {quantity}</span>
            <span>sum: {sumProduct(product)}</span>

            <button onClick={btnOnClick}>{'Remove from Cart'}</button>
        </li>
    );
}

export default ShopCart;