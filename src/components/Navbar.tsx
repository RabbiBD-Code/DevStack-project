import Logo from "../assets/logo-text.png";
import HambarLogo from "../assets/hamburger.png"
const Navbar = () => {
    return (
        <nav className=" border-b border-gray-300 sticky top-0 z-50 bg-white">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              ><img src={HambarLogo} alt="" /></div>
              <ul
                
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt- w-52 p-2 shadow"
              >
                <li className="text-red-400">
                <a >Home</a>
              </li>
               <li>
                  <a>Technologies</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-red-400">
                <a>Home</a>
              </li>
               <li>
                  <a>Technologies</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-5 text-sm">
            <a className="">Sign In</a>
            <div className="bg-[#D91B7E] rounded-4xl py-2 px-4">
              <a className="text-white">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;