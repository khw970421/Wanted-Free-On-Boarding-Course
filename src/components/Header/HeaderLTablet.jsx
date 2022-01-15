import menuIcon from "../../imgs/icon/icon-menu.png";
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
      <div class="leftHeader" style={leftHeaderStyle}>
        <div>
          <img src={menuIcon} style={iconStyle} />
        </div>
        <div>wanted</div>
      </div>
      <div class="centerHeader" style={centerHeaderStyle}>
        {headerContentArr.map((headerContent) => (
          <div>{headerContent}</div>
        ))}
      </div>
      <div class="rightHeader" style={rightHeaderStyle}>
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
  margin: "10px",
};

const leftHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  width: "100px",
  margin: "10px",
};

const centerHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "700px",
  margin: "10px",
};

const iconStyle = {
  width: "17px",
  height: "14px",
  verticalAlign: "middle",
};

const rightHeaderStyle = {
  display: "flex",
  width: "250px",
  justifyContent: "space-around",
};

const headerButton = {
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "gray",
};

export default HeaderLTablet;
