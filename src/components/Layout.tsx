import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";
import { isDesktop, deviceType } from "react-device-detect";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const [deviceProps, setDeviceProps] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (deviceType) {
      setDeviceProps(true);
    }
  }, []);

  return deviceProps ? (
    <Container>
      <Screen isDesktop={isDesktop}>
        <Header />
        <Contents>
          <Scrollbars ref={scrollRef}>{children}</Scrollbars>
        </Contents>
        <Footer />
      </Screen>
    </Container>
  ) : (
    <div>디바이스 타입을 불러오지 못했습니다.</div>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Screen = styled.div<{ isDesktop: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1600px;
  height: 100vh;
  border: 1px solid ${theme.mainBorderColor};
  border-radius: 8px;
  background-color: ${theme.screenBgColor};
  @media all and (max-width: 1600px) {
    width: 100%;
  }
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 105px);
`;
