import { GithubIcon } from "@styles/svgs/GithubIcon";
import { theme } from "@styles/theme";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="left">
        <Menu className="find">
          <span>find me in:</span>
        </Menu>
        <Menu>
          <span>SNS</span>
        </Menu>
        <Menu>
          <span>SNS</span>
        </Menu>
      </div>
      <Menu className="username">
        <span>@hongsyong92</span>
        <GithubIcon />
      </Menu>
    </Container>
  );
};

export default Footer;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  border-right: 1px solid ${theme.mainBorderColor};
  color: ${theme.descFontColor};
  white-space: nowrap;
  cursor: pointer;
`;

const Container = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-top: 1px solid ${theme.mainBorderColor};
  .left {
    display: flex;
    .find {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: auto;
      padding: 0 18px 0 22px;
      cursor: auto;
    }
    @media all and (max-width: 1600px) {
      flex-grow: 1;
      > .find {
        flex-grow: 1;
      }
    }
  }
  .username {
    display: flex;
    align-items: center;
    width: auto;
    padding: 0 18px 0 22px;
    border-left: 1px solid ${theme.mainBorderColor};
    border-right: 0;
    @media all and (max-width: 1600px) {
      width: 50px;
      padding: 0;
    }
    > span {
      margin-right: 5px;
      @media all and (max-width: 1600px) {
        display: none;
      }
    }
  }
`;
