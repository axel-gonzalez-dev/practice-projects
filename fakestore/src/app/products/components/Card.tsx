import Product from '@/app/products/interfaces/Product';
import Image from 'next/image';

export default function Card({ id, title, price, description, category, image, rating }: Product) {

    return (
        <div className="max-w-sm p-2 | bg-gray-100 | border border-neutral-100 hover:border-neutral-200 | shadow hover:shadow-lg | cursor-pointer">
            <div id='image-container' className='h-[75%] | flex justify-center items-center | overflow-y-hidden | bg-white'>
                <Image src={image} alt="Product image" width={200} height={200} />
            </div>
            <div id='text-container'>
                <p className="text-left">{title}</p>
                <p className='text-sm mt-4'>{price}</p>
            </div>
        </div>
    );

};