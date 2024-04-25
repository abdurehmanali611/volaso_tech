import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [navLink, setNavLink] = useState(true)

  const toggleNav = () => {
    setNavLink(!navLink)
  }

  return (

    <div className="flex flex-row justify-between px-6 py-6">
      <div className="flex flex-row gap-5">
        <h3 className="text-[18px] text-[#FCDC2A] mt-2">Volaso</h3>
        <img src="/logo.jpg" alt="img"
        className="w-12 h-10 rounded-full bg-white"
        />
      </div>
      {navLink ? (
        <div>
        <ul className="flex flex-row gap-8">
            <li><Link className=" hover:text-slate-400 text-yellow-500 after:text-red-400 md:hidden" to='/technology'>Technology</Link></li>
            <li><Link className=" hover:text-slate-400 text-yellow-500 after:text-red-400 md:hidden" to='/about'>About</Link></li>
            <li className="rounded-[15px] bg-gray-200 w-24 h-[26px] text-center hover:bg-white"><Link className="hover:text-slate-400 text-black after:text-red-400" to='/contact'>Contact</Link></li>
            <li><Link 
            className="hidden md:block"
            onClick={toggleNav}
            >
                <img 
                src="/menu.png"
                alt="menu"
                className="w-10 h-7 bg-slate-300 rounded-[10px]"
                />
            </Link></li>
        </ul>
      </div>
      ): (
        <div className="flex flex-col gap-5 bg-gray-400 h-64 w-40 rounded-[20px] items-end px-3 py-3">
          <Link
          onClick={toggleNav}
           >
          <img src="/close.jpg" alt="close" className="w-10 h-10 rounded-[30px]"/>
          </Link>
         <ul className="px-[10%] flex flex-col gap-5">
            <li className="rounded-[15px] bg-gray-200 w-28 h-10 hover:bg-white text-center py-2"><Link className="hover:text-slate-400 text-black after:text-red-400" to='/contact'>Contact</Link></li>
            <li className="bg-gray-700 w-28 h-10 rounded-[20px]"><Link className=" hover:text-slate-400 text-white after:text-red-400 hidden md:block py-2 text-center" to='/technology'>Technology</Link></li>
            <li className="bg-gray-700 w-28 h-10 rounded-[20px]"><Link className=" hover:text-slate-400 text-white after:text-red-400 hidden md:block text-center py-2" to='/about'>About</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
