import { useState } from "react"
import { a_assets } from "../assets/admin_assets/assets"
import { f_assets } from "../assets/frontend_assets/assets"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <img src={a_assets.logo} className="w-36" alt="" />

            <ul className="hidden sm:flex gap-5 text-sm uppercase text-gray-600">
                <NavLink to='/' className="flex flex-col items-center gap-1 ">
                    <p>Home</p>
                    {<hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />}
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p>Collection</p>
                    {<hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />}
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p>About</p>
                    {<hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />}
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>Contact</p>
                    {<hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />}
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img src={f_assets.search_icon} className="w-5 cursor-pointer" alt="" />

                <div className="group relative">
                    <img className="w-5 cursor-pointer" src={f_assets.profile_icon} alt="" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>
                <Link to="/cart" className="relative">
                    <img className="w-5 min-w-5 cursor-pointer" src={f_assets.cart_icon} alt="" />
                    <p className="absolute right-[-8px] bottom-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={f_assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
            </div>

            {/* Sidebar Menu  */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600 uppercase">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={f_assets.dropdown_icon} className="h-4 rotate-180" alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar