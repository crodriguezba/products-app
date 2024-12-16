import { useEffect, useState, useCallback } from 'react';
import { useFetch } from '../hooks/useFetch';


export const ProductList = () => {
    //logica
    // const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");

    // Uso del custom hook useFetch
    const { data: products, loading, error} = useFetch(url);
    // Contador
    const [counter, setCounter] = useState(0);


    // const fetchProducts = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    // }, [url])
    
    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    // }, [url]);

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]);

    useEffect(() => {
        console.log(counter);
    }, [counter]);


    return (
        <section>
            <div className='filter'>
                <button onClick={() => setCounter(counter + 1)}>{counter}</button>
                <button onClick={() => setUrl("http://localhost:8000/products")}>View all</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>View in stock only</button>
            </div>
            { loading && <p className='load'>Loading Products...</p> }
            { error && <p className='error'>{error}</p> }
            {
                products && products.map(product => (
                    <div className='card' key={product.id}>
                        <p className='id'>{ product.id }</p>
                        <p className='name'>{ product.name }</p>
                        <p className='info'>
                            <span>{ product.price }</span>
                            <span className={product.in_stock ? 'instock' : 'unavailable'}>{product.in_stock ? "In stock!" : "Unaivalable" }</span>
                        </p>
                    </div> 
                ))
            }
        </section>
    )
}


