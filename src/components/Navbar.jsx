/** 
 * @copyright 2025 Alexandre
 * @license Apache-2.0
 */

import { useRef } from "react";


const Navbar = () => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
    return (
        <nav className={'navbar '}>
            {
            navItems.map(({label, link, className,ref}, key) => (
                <a 
                href={link}
                key={key} 
                ref={ref}
                className={className} 
                onClick={null}
                >
                {label}
                </a>
                
            ))
        }
        <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

export default Navbar;