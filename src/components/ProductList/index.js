import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from "./ProductList.module.sass";
import { mdiCart } from '@mdi/js';
import Icon from '@mdi/react';
import ProductListItem from './ProductListItem';

function ProductList() {
    const product = useSelector(state => state.product);
    const { listItem, buttonAddCart, inputItem, spanItem } = styles;
    
    return (
        <ul className={styles.list}>
            <Link to="/Cart">
                <Icon path={mdiCart} size={3} color="red" />
            </Link>
            {product.map(p => <ProductListItem product={p} key={p.id}
                stylesList={{ listItem, buttonAddCart, inputItem, spanItem }} />)}
        </ul>
    );
};

export default ProductList;
