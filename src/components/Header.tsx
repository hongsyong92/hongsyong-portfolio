import Link from "next/link";
import styled from "styled-components";
import { theme } from "@styles/theme";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Name>
        <span>hong seung-young</span>
        <Hamburger open={open} setOpen={setOpen} />
      </Name>

      <MenuWrapper open={open}>
        <Menu onClick={handleMenuClick}>
          <Link href="/">
            <a>_hello</a>
          </Link>
        </Menu>
        <Menu onClick={handleMenuClick}>
          <Link href="/about">
            <a>_about-me</a>
          </Link>
        </Menu>
        <Menu onClick={handleMenuClick}>
          <Link href="/projects">
            <a>_projects</a>
          </Link>
        </Menu>
        <Menu onClick={handleMenuClick} className="contact_me">
          <Link href="/">
            <a>_contact-me</a>
          </Link>
        </Menu>
      </MenuWrapper>
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${theme.descFontColor};
  }
`;

const Name = styled(Menu)`
  color: ${theme.descFontColor};
  justify-content: space-between;
  padding: 0 150px 0 22px;
  cursor: auto;
  @media all and (max-width: 1600px) {
    flex-grow: 1;
    width: 100%;
    padding: 0 20px;
  }
`;

const Container = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${theme.mainBorderColor};
  @media all and (max-width: 1600px) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.ul<{ open: boolean }>`
  display: flex;
  @media all and (max-width: 1600px) {
    position: absolute;
    top: 55px;
    left: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 107px);
    background-color: ${theme.screenBgColor};
    z-index: 1;
    > div {
      height: 55px;
      border-bottom: 1px solid ${theme.mainBorderColor};
      justify-content: flex-start;
      padding: 0 20px;
      > a {
        color: ${theme.baseFontColor};
      }
    }
  }
`;
