/** 
 * @copyright 2025 Alexandre
 * @license Apache-2.0
 */

import Navbar from "./navbar"



const Header = () => {

   return (<header className="fixed top-0 left-0 w-full h-20 
    flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0" >
    <div className="max-w-screen-2xl w-full mx-auto px-4
    flex justify-between items-center">
      <h1>
        <a href="/" className="logo">
          <img src="./public/images/logo.svg" 
          width={40}
          height={40}
          alt="Alexandre Kalaydjian" />
        </a>
      </h1>

      <div className="relative md:justify-self-center">
        <button className="md:hidden" onClick={null}>

          <span className="material-symbols-rounded">
            menu
          </span>
        </button>
        <Navbar />
      </div>
      <a href="#contact" className="btn btn-secondary max-md:hidden">
        Me contacter
      </a>
    </div>
    </header>

  )
    
}

export default Header
