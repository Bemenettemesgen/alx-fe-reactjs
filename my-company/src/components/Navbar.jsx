import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#eee', padding: '10px' }}>
            <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>About</Link>
            <Link to="/services" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Services</Link>
            <Link to="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;
