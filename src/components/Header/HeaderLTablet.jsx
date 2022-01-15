import menuIcon from "../../imgs/icon/icon-menu.png";
import { headerContentArr } from "../../utils/constant";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div>회원가입/로그인</div>
          <div>|</div>
          <button style={headerGovServiceButtonStyle}>기업 서비스</button>
        </div>
      </div>
    </section>
  );
};

export default HeaderLTablet;
