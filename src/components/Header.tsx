import Link from "next/link";
import styled from "styled-components";
import { theme } from "@styles/theme";
import { BurgerMenu } from "@styles/svgs/BurgerMenu";

const Header = () => {
  return (
    <Container>
      <Name>
        <span>seung-young hong</span>
        <button>
          <BurgerMenu />
        </button>
      </Name>

      <div className="menus">
        <Menu>
          <Link href="/">
            <a>_hello</a>
          </Link>
        </Menu>
        <Menu>
          <Link href="/about">
            <a>_about-me</a>
          </Link>
        </Menu>
        <Menu>
          <Link href="/projects">
            <a>_projects</a>
          </Link>
        </Menu>
        <Menu className="contact_me">
          <Link href="/">
            <a>_contact-me</a>
          </Link>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid ${theme.mainBorderColor};
  padding: 0 32px;
  white-space: nowrap;
  cursor: pointer;
  > a {
    color: ${theme.descFontColor};
  }
`;

const Name = styled(Menu)`
  color: ${theme.descFontColor};
  justify-content: space-between;
  padding: 0 150px 0 22px;
  cursor: auto;
  > button {
    display: none;
  }
  @media all and (max-width: 1600px) {
    flex-grow: 1;
    width: 100%;
    padding: 0 15px;
    > button {
      display: flex;
    }
  }
`;

const Container = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${theme.mainBorderColor};
  .menus {
    display: flex;
    @media all and (max-width: 1600px) {
      display: none;
    }
  }
`;
