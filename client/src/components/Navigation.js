import "./Navigation.css"
const Navigation = () => {
    return (
        <nav className="col-full grid-container">
            
            <h1 className="col-1">Starter</h1>

            <form action="www.github.com" className="intro-nav-links">
                <input type="submit" value="Login" />
            </form>
            <form action="www.github.com" className="intro-nav-links">
                <input type="submit" value="Sign up" />
            </form>      
        </nav>
    )
}

export default Navigation;