import BgBlur from "@styles/svgs/BgBlur";
import { theme } from "@styles/theme";
import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <BgBlur />
      <TextBox>
        <div className="intro">
          <span>Hello, I am</span>
          <h1>Seung-Yong Hong</h1>
          <p>&gt; Front-end developer</p>
        </div>
        <div className="desc">
          <p>&#47;&#47; you can also see it on my Github page</p>
          <p>
            <span>const </span>
            <span>githubLink</span>
            <span> = </span>
            <span>&#34;https://github.com/hongsyong92&#34;</span>
            <span>&#59;</span>
          </p>
        </div>
      </TextBox>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  > svg {
    position: absolute;
    top: 50px;
    right: 0;
    @media all and (max-width: 1600px) {
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`;

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  .intro {
    > span {
      font-size: 18px;
      color: ${theme.baseFontColor};
      line-height: 24px;
    }
    > h1 {
      font-size: 62px;
      line-height: 81px;
      color: ${theme.baseFontColor};
    }
    > p {
      font-size: 32px;
      line-height: 42px;
      color: ${theme.blueFontColor};
    }
  }
  .desc {
    margin-top: 80px;
    > p {
      color: ${theme.descFontColor};
      line-height: 21px;
      margin-bottom: 10px;
      > span {
        color: ${theme.baseFontColor};
        &:nth-child(1) {
          color: ${theme.blueFontColor};
        }
        &:nth-child(2) {
          color: ${theme.greenFontColor};
        }
        &:nth-child(4) {
          color: ${theme.salmonFontColor};
        }
      }
    }
  }
`;
