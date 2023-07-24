import styled from "styled-components";
import Image from "../../atoms/Image/Image";

export const StyledWrapper = styled.section`
  width: 90%;
  max-width: 1080px;
  margin: 300px auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  @media (max-width: 720px) {
    margin: 100px auto;
    gap: 34px;
  }
`;

export const StyledItem = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  padding-top: 30px;

  @media (max-width: 720px) {
    padding-top: 8px;
  }
`;

export const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  opacity: 0.4;

  @media (max-width: 720px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledHeadline = styled.h2`
  margin: 0;
  font-size: 3.6rem;
  text-align: center;
  font-weight: 800;

  @media (max-width: 720px) {
    font-size: 2.4rem;
  }
`;

export const StyledContent = styled.p`
  font-size: 6.4rem;
  font-weight: 900;
  margin: 0 auto 60px auto;
  position: relative;
  z-index: 1;

  @media (max-width: 720px) {
    font-size: 4rem;
    margin: 0 auto 30px auto;
  }
`;
