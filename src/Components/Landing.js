import React, { useEffect, useState } from 'react';
import { getCoin } from '../Services/api';
import Coin from './Coin';
import Load from './Load';
import styles from './Coin.module.css'


const Landing = () => {

    const [coins, setCoins] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin()
            setCoins(data)
        }

        fetchApi()
    }, [])

    const searchStataHandler = event => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='text-center'>
            <input type='text' className={styles.input} placeholder='Search' value={search} onChange={searchStataHandler} />

            {coins.length ?
                <div className={styles.container}>
                    {searchCoins.map(coin => (
                        <Coin key={coin.id} data={coin} />
                    ))}
                </div> :
                <Load />
            }
        </div>
    );
}

export default Landing;