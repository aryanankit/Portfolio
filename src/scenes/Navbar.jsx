import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";

const Link = ({ page , selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow': ''}
        
      `}
    ></AnchorLink>
  )
}

const Navbar = ({selectedPage , setSelectedPage}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`z-40 w-full fixed `} >
      <div className="flex items-center justify-between mx-auto w-5/6" >
        <h4 className="font-playfair text-3xl font-bold " >JE</h4>
        
        {/* DESKTOP NAV */}
        { isAboveSmallScreens ?  (
          <div className="flex justify-between gp-16 font-opensans text-sm font-semibold"> 
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage= {setSelectedPage}
            />
          </div>
        ) : <div> </div> }
      </div>
    </div>
  );
 }

 export default Navbar