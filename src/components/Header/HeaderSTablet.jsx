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

const HeaderSTablet = () => {
  return (
    <div style={headerStyle}>
      <div class="flexColumn" style={flexColumnHeaderStyle}>
        <div class="flexTopHeader" style={flexTopHeaderStyle}>
          <div class="leftHeader" style={leftHeaderStyle}>
            <div>
              <img src={menuIcon} style={iconStyle} />
            </div>
            <div>wanted</div>
          </div>
          <button style={headerRegisterButton}>회원가입하기</button>
        </div>
        <div class="flexBottomHeader" style={flexBottomHeaderStyle}>
          <div class="centerHeader" style={centerHeaderStyle}>
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
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 5%",
};

const flexColumnHeaderStyle = {
  width: "800px",
  display: "flex",
  flexDirection: "column",
};

const leftHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  width: "100px",
  margin: "10px",
};

const flexTopHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0px",
};

const centerHeaderStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "500px",
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

const flexBottomHeaderStyle = {
    display: "flex",
    justifyContent : "space-between",
    alignItems : "center"
}

const headerRegisterButton = {
  border: "1px solid blue",
  borderRadius: "17px",
  backgroundColor: "white",
  color: "blue",
  padding: "0px 14px",
  width: "114px",
  height: "32px",
};

export default HeaderSTablet;
