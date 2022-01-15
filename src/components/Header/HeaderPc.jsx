import menuIcon from "../../imgs/icon/icon-menu.png";
import { headerContentArr } from "../../utils/constant";
import SearchIcon from "../HeaderIcon/SearchIcon";
import ContentHighlight from "../HeaderIcon/ContentHighlight";
import {
  headerMainStyle,
  headerContentStyle,
  iconStyle,
  headerSubStyle,
  headerGovServiceButtonStyle,
  headerPcStyle,
  headerContainerStyle,
} from "./css.js";

const HeaderPc = () => {
  return (
    <section class="Header" style={headerContainerStyle}>
      <div style={headerPcStyle}>
        <div class="leftHeader" style={headerMainStyle}>
          <div>
            <img src={menuIcon} style={iconStyle} />
          </div>
          <div>wanted</div>
        </div>
        <div class="centerHeader" style={headerContentStyle}>
          {headerContentArr.map(({ contentName,highlight }) => (
            <div>
              {contentName}
              {highlight ? <ContentHighlight text={highlight} /> : <></>}
            </div>
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

export default HeaderPc;
