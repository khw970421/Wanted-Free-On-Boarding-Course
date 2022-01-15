import menuIcon from "../../imgs/icon/icon-menu.png";
import { headerContentArr } from "../../utils/constant";
import {
    headerMainStyle,
    iconStyle,
    headerSTabletStyle,
    headerContainerStyle,
    flexColumnHeaderStyle,
    flexTopHeaderStyle,
    tabletContentStyle,
    flexBottomHeaderStyle,
    headerRegisterButton
  } from "./css.js";

const HeaderSTablet = () => {
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
          <div class="centerHeader" style={tabletContentStyle}>
            {headerContentArr.map((headerContent) => (
              <div>{headerContent}</div>
            ))}
          </div>
          <div>
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
              class="feather feather-more-horizontal"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
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
                class="feather feather-more-horizontal"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};



export default HeaderSTablet;
