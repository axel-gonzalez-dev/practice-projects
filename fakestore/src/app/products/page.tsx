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
            <main className=''>

                <section id='hero' className='bg-hero bg-cover | min-h-[40vh] | p-4 | flex items-end'>
                    <p className='text-white font-semibold | align-bottom'>New Essential Tees</p>
                </section>

                <div className='grid grid-cols-responsive gap-4 justify-items-stretch | pt-4 |'>
                    {products?.map(product => (
                        <Card key={product?.id} image={product?.image} title={product?.title} description={product?.description} price={product?.price} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Produts;