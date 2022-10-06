import styled from "styled-components";
import { rgba } from "polished";
import { Canvas } from "@react-three/fiber";

export const StyledWrapper = styled.article`
  width: 90%;
  max-width: 1385px;
  margin: 0 auto 80px;
  padding: 90px 30px 90px 90px;
  border-radius: 60px;
  background: ${({ theme }) => rgba(theme.backgroundBlurred, 0.6)};
  backdrop-filter: blur(36px);
  display: flex;
  height: 800px;
  position: relative;
`;

export const StyledLeftWrapper = styled.div``;

export const StyledName = styled.h3`
  max-width: 400px;
  font-size: 4.8rem;
  line-height: 1.3;
  font-weight: 800;
  margin: 0 0 30px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 2rem;
  line-height: 2;
  font-weight: 500;
  max-width: 420px;
`;

export const StyledProperty = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 10px;

  :last-of-type {
    margin: 0;
  }
`;

export const StyledPropertyIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

export const StyledCanvas = styled(Canvas)`
  flex: 1;
  height: 100%;
`;
