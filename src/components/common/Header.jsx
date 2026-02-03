import './Header.css';

function Header({title}) {

    // header display
    return(
        <div id="header">
        <h1>{title}</h1>
        {/** roughed in navigation links */}
        <nav>
        <a class="button">Home</a>
        <a class="button">Products</a>
    </nav>
        </div>
    );
}

export default Header;