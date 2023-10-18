import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-5 justify-center mb-10">
            <NavLink className="btn link" to='/'>Home</NavLink>
            <NavLink className="btn link" to='/addCoffee'>Add Coffee</NavLink>
            <NavLink className="btn link" to='/signIn'>Sign In</NavLink>
            <NavLink className="btn link" to='/signUp'>Sign Up</NavLink>
            <NavLink className="btn link" to='/users'>Users</NavLink>
        </div>
    );
};

export default Header;