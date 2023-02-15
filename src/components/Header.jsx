import { useState } from "react";
import { icon2w, menu, close, globe } from "../assets";
import { navLinks } from "../constants";
import { useRef } from "react";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const contMenu = useRef(null);
  const closeOpenMenu = (e) => {
    if(contMenu.current && toggle && !contMenu.current.contains(e.target)) {
      setToggle(false);
    }
  }
  document.addEventListener('mousedown',closeOpenMenu);
  
  return (
    <nav  className="bg-second  fixed flex py-2 felxCenter justify-between items-center paddingX w-full darkText z-50 " >
      <a href="#home">
        <img src={icon2w} alt="logo" className="w-[50px]"/>
      </a>

      {/* esto es para el navbar de la version de escritorio  */}
        <ul className="list-none sm:flex hidden justify-center items-center flex-1  ">
          {/* hacemos el recorrido de cada uno de los links para el navbar */}
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={` ${nav.visible ? '':'hidden'} font-poppins font-semibold cursor-pointer text-[20px] ${index !== navLinks - 1 ? 'm-2' : ''}  transition duration-500 hover:underline hover:underline-offset-4 hover:decoration-fourth`}>
              <a href={`#${nav.id} `} > { props.language ? nav.titleEs : nav.titleEn } </a>
            </li>
          ))}
        </ul>
        <div className="justify-end items-center sm:flex hidden">
          {/* <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}>
            <img src={props.darkMode ? sun : moon} alt="darkMode" className="dark:invert"/>
          </div>
          <span className="mx-2">|</span>  */}
          <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> 
            <div className={`bg-first  p-[4px] rounded-md font-semibold text-second hover:bg-gray-300 hover:transition duration-700 `}>
                {props.language ? (
                  <div className="flex flex-row">
                    EN 
                    <img src={globe} alt="lang" className="pl-1 " />
                  </div>
                ) : (
                  <div className="flex flex-row">
                    ES 
                    <img src={globe} alt="lang" className="pl-1 "/>
                  </div>
                )}

            </div>
          </div>
        </div>
      

      {/* esto es la parte del navbar para la version mobile */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev)=>!prev)} />

        <div ref={contMenu} className={`${toggle ? 'flex' : 'hidden'} p-6 bg-second  absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {/* hacemos el recorrido de cada uno de los links para el navbar */}
            {navLinks.map((nav, index)=> (
              <li key={nav.id} className={` ${nav.visible ? '':'hidden'} font-poppins font-normal cursor-pointer text-[16px] ${index !== navLinks - 1 ? 'mb-2' : ''}`}>
                <a href={`#${nav.id} `} > { props.language ? nav.titleEs : nav.titleEn } </a>
              </li>
            ))}
            <div className=" flex space-x-16 items-center mt-5">
              {/* <div className="cursor-pointer" onClick={() => props.setDarkMode((prev)=> !prev)}> 
                <img src={props.darkMode ? sun : moon} alt="darkMode" className="dark:invert"/>
              </div> */}
              
              <div className="cursor-pointer" onClick={() => props.setLanguage((prev)=> !prev)}> 
                <div className={`bg-first  p-[4px] rounded-md font-semibold text-second`}>

                    {props.language ? (
                      <div className="flex flex-row">
                        EN 
                        <img src={globe} alt="lang" className="pl-1" />
                      </div>
                    ) : (
                      <div className="flex flex-row">
                        ES 
                        <img src={globe} alt="lang" className="pl-1"/>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Header