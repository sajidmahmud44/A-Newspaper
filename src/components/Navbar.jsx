import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-5">
             <Link to='/' className="text-gray-500">Home</Link>
             <Link to='/career' className="text-gray-500">Career</Link>
             <Link to='/about' className="text-gray-500">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
             <div>
                <img src={userIcon} alt="" />
             </div>
             <button className="btn-neutral btn rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;