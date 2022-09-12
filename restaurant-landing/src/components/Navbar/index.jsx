

import './navbar.scss';
const Navbar = () => {

    return (
        <>

            <nav className="navbar">
                <a href="#" className='navbar-logo'>Logo</a>
                <button className='navbar-toggle'>Abrir</button>
                <div className="sections-container">
                    <ul className='sections'>
                        <li><a href="#"> Home</a></li>
                        <li><a href="#"> Menu</a></li>
                        <li><a href="#"> Reservation</a></li>
                        <li><a href="#"> Gallery</a></li>
                        <li><a href="#"> Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;