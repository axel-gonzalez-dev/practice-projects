'use client';

import Link from "next/link";

export default function Navbar() {

    const navbarLinks = [
        { url: '/products', label: "Products" }
    ];


    const toggleNavbar = () => {

        try {
            const navbarId = document.getElementById('navbar-default');
            navbarId?.classList.toggle('hidden');
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <nav className="bg-white border-gray-200 | fixed w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Store</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={toggleNavbar}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium | flex flex-col | mt-4 | border-gray-100 md:flex-row md:space-x-8 md:mt-0 ">
                        {navbarLinks.map(link => (
                            <li>
                                <Link href={link?.url} className="block | py-2 pl-3 pr-4 | text-black md:bg-transparent | md:p-0" aria-current="page">{link?.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );

}