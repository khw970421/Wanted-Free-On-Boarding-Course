import React from "react"
import HeaderPc from './HeaderPc'
import HeaderLTablet from './HeaderLTablet'
import HeaderSTablet from './HeaderSTablet'
import HeaderMobile from './HeaderMobile'
import { useMediaQuery } from "react-responsive"
const Header = ()=>{
    const isPc = useMediaQuery({
        query : "(min-width:1200px)"
      });
      const isLargeTablet = useMediaQuery({
        query : "(min-width:990px) and (max-width:1200px)"
      });
      const isSmallTablet = useMediaQuery({
        query : "(min-width:766px) and (max-width:990px)"
      });
      const isMobile = useMediaQuery({
        query : "(max-width:766px)"
      });
      
    
      return (
      <div>
        {isPc && <HeaderPc/>}
        {isLargeTablet && <HeaderLTablet/>}
        {isSmallTablet && <HeaderSTablet/>}
        {isMobile && <HeaderMobile/>}
      </div>
      )
}

export default Header
