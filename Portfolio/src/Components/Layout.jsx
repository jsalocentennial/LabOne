import {Link} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <nav>
                <Link to="/"> Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/projects"> Projects</Link> |
                <Link to="/education"> Education</Link> |
                <Link to="/services"> Services</Link> |
                <Link to="/contact"> Contact</Link>
            </nav>
            

            <hr></hr>
        </div>
    )
}

export default Layout;