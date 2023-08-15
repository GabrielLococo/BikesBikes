import { Profiler, useEffect, useState } from 'react';
import { SkeletonItem } from '../SkeletonItem';
import './ItemListContainer.css'
import { ItemList } from '../ItemList';
import { getData } from '../../data';

export const ItemListContainer = ({ category = '' }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
            if (category) {
                getData()
                    .then(data => {
                        const filteredData = data.filter(item => item.category === category)
                        setProducts(filteredData)
                    })
                    .catch(error => console.log(error))
                    .finally(() => setLoading(false))
            } else {
                getData()
                    .then(data => setProducts(data))
                    .catch(error => console.log(error))
                    .finally(() => setLoading(false))
            }
    }, [category])
    return (
        <main className='main'>
            <h1 className='title' style={{ display: 'inline-block' }}>BIKES BIKES</h1><span style={{fontSize:'50px',color:'black'}}>{category}</span>
            {loading
                ? <SkeletonItem cards={10} />
                : <ItemList products={products} />}

        </main>
    );
}
