import {headerLogo} from '../assets/images';

import { hamburger } from '../assets/icons';

import { navLinks } from '../constants';


const Nav = () => {
  return (
   
   <header className='padding-x py-8 absolute z-10 w-full'>

    <nav className='flex justify-between items-center max-container'>
      <a href="/"><img src={headerLogo} alt="Logo" /></a>

<ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>

  {navLinks.map((item)=> (
       <li key={item.label}>  <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-500'></a>
       
       {item.label}
       </li>
  ))}


</ul>

<div className='hidden max-lg:block'>

  <a href="/"><img src={hamburger} alt="hamburger" width={25} height={25} /></a>
</div>




    </nav>
    

   </header>
  )
}

export default Nav