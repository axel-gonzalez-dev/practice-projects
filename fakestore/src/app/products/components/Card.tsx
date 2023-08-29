import  Product from '@/app/products/interfaces/Product';
import Image from 'next/image';

export default function Card( {id,title, price, description, category, image, rating}: Product) {

    return (
        <div className="block max-w-sm p-6 | bg-neutral-100 border shadow hover:bg-neutral-300 cursor-pointer">
            <Image src={image} alt="Product image" width={200} height={200}/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            {/* <p className="font-normal text-gray-700">{description}</p> */}
        </div>
    );

};