import "./Navigation.css";

const Navigation = () => {
    return (
        <nav>
            <h1 className="brand-name">Starter</h1>

            <form action="www.github.com" id="login">
                <input type="submit" value="Login" />
            </form>

            <form action="www.github.com" id="signup">
                <input type="submit" value="Sign up" />
            </form>     
        </nav>
    )
}

export default Navigation;