import menuIcon from "../../imgs/icon/icon-menu.png";
import { headerContentArr } from "../../utils/constant";

import SearchIcon from "../HeaderIcon/SearchIcon";

import {
  headerMainStyle,
  headerContentStyle,
  iconStyle,
  headerSubStyle,
  headerGovServiceButtonStyle,
  headerLTabletStyle,
  headerContainerStyle,
} from "./css.js";

const HeaderLTablet = () => {
  return (
    <section class="Header" style={headerContainerStyle}>
      <div style={headerLTabletStyle}>
        <div class="leftHeader" style={headerMainStyle}>
          <div>
            <img src={menuIcon} style={iconStyle} />
          </div>
          <div>wanted</div>
        </div>
        <div class="centerHeader" style={headerContentStyle}>
          {headerContentArr.map((headerContent) => (
            <div>{headerContent}</div>
          ))}
        </div>
        <div class="rightHeader" style={headerSubStyle}>
          <SearchIcon />
          <div>회원가입/로그인</div>
          <div>|</div>
          <button style={headerGovServiceButtonStyle}>기업 서비스</button>
        </div>
      </div>
    </section>
  );
};

export default HeaderLTablet;
