import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { f_assets } from "../assets/frontend_assets/assets"

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)

    return showSearch ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input type="text" placeholder="Search" className="flex-1 outline-none bg-inherit text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
                <img className="w-4" src={f_assets.search_icon} alt="" />
            </div>
            <img src={f_assets.cross_icon} className="inline w-3.5 mb-1 cursor-pointer" onClick={() => setShowSearch(false)} alt="" />
        </div>
    ) : null
}

export default SearchBar