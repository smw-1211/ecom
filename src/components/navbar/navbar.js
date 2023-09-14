import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                <div className="grid">
                    <Link to="/" className="link">
                        <h1 className="brand">E-commerce</h1>
                    </Link>
                    <div className="formContainer">
                        <form className="search">
                            <div className="fomr-control">
                                <input type="text" placeholder="Search products.." />
                            </div>
                            <button type="button" className="search-btn">
                                Search Product
                            </button>
                        </form>
                    </div>
                    <Link to="/cart" className="link-headerCart">
                        <img className="cartImg" src="/cart.svg" alt="cart"/>
                    </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }