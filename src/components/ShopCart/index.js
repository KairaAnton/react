import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ACTION_TYPES from "./../../actions/types";
import styles from "./ShopCart.module.sass";
import ShopCartList from "./ShopCartList";
import sumProduct from "./ShopCartList/sumProduct";

function ShopCart() {
    const dispatch = useDispatch();
    const shopCart = useSelector(state => state.shopCart);
    const purchaseAmount = () => {
        let sum = 0;
        for (let prod of shopCart) {
            sum += sumProduct(prod);
        };
        return sum;
    };

    const viewList = () => {
        return shopCart.map(p => {
            return <ShopCartList product={p} key={p.id} btnOnClick={(event) => {
                dispatch({ type: ACTION_TYPES.PRODUCT_DELETE_SHOPCART, p })
            }} />
        });
    };

    return (<>
        <ul className={styles.list}>
            <Link className={styles.link} to="/"> Назад к покупкам</Link>
            <span>сумма покупки: {purchaseAmount()}</span>
            {viewList()}
        </ul>
    </>);
};

export default ShopCart;
