import menuIcon from "../../imgs/icon/icon-menu.png";
import {headerMobileContentArr } from "../../utils/constant";
import SearchIcon from "../HeaderIcon/SearchIcon";
import MoreHorizontalIcon from "../HeaderIcon/MoreHorizontalIcon";

import {
    headerMainStyle,
    iconStyle,
    headerSTabletStyle,
    headerContainerStyle,
    flexColumnHeaderStyle,
    flexTopHeaderStyle,
    mobileContentStyle,
    flexBottomHeaderStyle,
    headerRegisterButton
  } from "./css.js";

const HeaderMobile = () => {
  return (
    <section class="Header" style={headerContainerStyle}>
    <div style={headerSTabletStyle}>
      <div class="flexColumn" style={flexColumnHeaderStyle}>
        <div class="flexTopHeader" style={flexTopHeaderStyle}>
          <div class="leftHeader" style={headerMainStyle}>
            <div>
              <img src={menuIcon} style={iconStyle} />
            </div>
            <div>wanted</div>
          </div>
          <button style={headerRegisterButton}>회원가입하기</button>
        </div>
        <div class="flexBottomHeader" style={flexBottomHeaderStyle}>
          <div class="centerHeader" style={mobileContentStyle}>
            {headerMobileContentArr.map((headerContent) => (
              <div>{headerContent}</div>
            ))}
          </div>
          <div>
            <SearchIcon/>
            <MoreHorizontalIcon/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};





export default HeaderMobile