'use client';

import { useState, useEffect } from 'react';
import Card from './components/Card';
import Product from './interfaces/Product';

const Produts = () => {

    useEffect(() => {
        getProducts();
    }, []);

    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async () => {

        try {
            let products = [];

            products = await fetch('https://fakestoreapi.com/products')
                .then(res => {
                    let response = res.json();
                    return response;
                })
                .catch(err => {
                    throw err;
                });

            setProducts(products);
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <>
            <main>
                
            <h1>Products</h1>

                <div className='grid grid-cols-3 gap-4'>

                    {products?.map((product, index) => (
                        <Card key={product?.id} image={product?.image} title={product?.title} description={product?.description}/>
                    ))}

                </div>

            </main>

        </>
    );

};

export default Produts;