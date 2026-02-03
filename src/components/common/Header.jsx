import { Link} from 'react-router-dom';
import './Header.css';

function Header({title}) {

    // header display
    return(
        <div id="header">
        <h1>{title}</h1>
        {/** roughed in navigation links */}
        <nav>
            <Link class="button" to="/">Home</Link>
            <Link class="button" to="/products">Products</Link>
        </nav>
        </div>
    );
}

export default Header