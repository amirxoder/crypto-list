import React from 'react';

import styles from './Coin.module.css'
const Coin = ({ data }) => {
    return (

        <div className={styles.coin}>
            <span>{data.market_cap_rank}</span>
            <img className={styles.img} src={data.image} alt="coin-logo" />
            <h1 className={styles.margin}>{data.name}</h1>
            <span className={styles.margin}>{data.symbol.toUpperCase()}</span>
            <span className={styles.margin}>${data.current_price.toLocaleString()}</span>
            <span className={data.price_change_percentage_24h >= 0 ? 'text-success fw-bold' : 'text-danger fw-bold'}>{data.price_change_percentage_24h.toFixed(2)}%</span>
            <span className={styles.margin}>${data.market_cap.toLocaleString()}</span>
        </div>

    );
}

export default Coin;