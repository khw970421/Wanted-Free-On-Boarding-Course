import menuIcon from "../../imgs/icon/icon-menu.png";
import {
    headerMainStyle,
    headerContentStyle,
    iconStyle,
    headerSubStyle,
    headerGovServiceButtonStyle,
  } from "./css.js";
const headerContentArr = [
  "채용",
  "이벤트",
  "직군별 연봉",
  "이력서",
  "커뮤니티",
  "프리랜서",
  "AI 합격예측!",
];

const HeaderLTablet = () => {
  return (
    <div style={headerStyle}>
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
        <button style={headerButton}>기업 서비스</button>
      </div>
    </div>
  );
};

const headerStyle = {
  display: "flex",
  width: "100%",
  fontWeight: "bolder",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "50px",
};

const headerButton = {
  border: "1px solid gray",
  borderRadius: "12px",
  backgroundColor: "white",
  color: "gray",
};

export default HeaderLTablet;
