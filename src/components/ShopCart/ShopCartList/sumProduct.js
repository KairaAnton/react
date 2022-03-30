const sumProduct = prod => {
    const { quantity, price, sale } = prod;
    if (sale) {
        const { discountPercent, onWhatAccount } = sale;

        const withtDiscount = Math.floor(quantity / onWhatAccount) * (onWhatAccount - discountPercent / 100);
        const withoutDiscount = quantity % onWhatAccount;
        return (withtDiscount + withoutDiscount) * price;
    }

    return price * quantity;

}

export default sumProduct;