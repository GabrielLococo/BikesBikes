import { useEffect, useState } from 'react';
import { SkeletonItem } from '../SkeletonItem';
import './ItemListContainer.css'
import { ItemList } from '../ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/app';
import { getData } from '../../data';

export const ItemListContainer = ({ category = '' }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const fetchData = async (category) => {
            try {
                const collectionRef = collection(firestore, 'productos');
                const snapshot = await getDocs(collectionRef)

                const fetchedData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                if(category){
                    const filteredData = fetchedData.filter(item => item.category === category)
                    setProducts(filteredData)
                } else {
                    setProducts(fetchedData)
                }
                setLoading(false)
            } catch (error) {
                console.error('Error!', error);
            }
        }
            fetchData(category)
    }, [category])
    return (
        <main className='main'>
            <h1 className='title' style={{ display: 'inline-block' }}>BIKES BIKES</h1><span>{category}</span>
            {loading
                ? <SkeletonItem cards={30} />
                : <ItemList products={products} />}

        </main>
    );
}
