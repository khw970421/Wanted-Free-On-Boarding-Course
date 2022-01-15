import menuIcon from "../../imgs/icon/icon-menu.png";
const headerContentArr = [
  "채용",
  "이벤트",
  "직군별 연봉",
  "이력서",
  "커뮤니티",
  "프리랜서",
  "AI 합격예측",
];

const HeaderPc = () => {
  return (
    <div style={headerStyle}>
      <div class="leftHeader" style={leftHeaderStyle}>
        <div><img src={menuIcon} style={iconStyle} /></div>
        <div>wanted</div>
      </div>
      <div class="centerHeader" style={centerHeaderStyle}>
        {headerContentArr.map((headerContent) => (
          <div>{headerContent}</div>
        ))}
      </div>
      <div class="rightHeader" style={rightHeaderStyle}>
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
  justifyContent: "space-around",
  alignItems:"center",
  height : "50px"
};

const leftHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  width: "100px",
};

const centerHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems:"center",
  width: "700px",
};

const iconStyle = {
  width: "17px",
  height: "14px",
  verticalAlign : "middle"
};

const rightHeaderStyle = {
  display: "flex",
  width : "250px",
  justifyContent: "space-around",
};

const headerButton = {
  border: "1px solid gray",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "gray",
};

export default HeaderPc;
