import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 90%;
  max-width: 1080px;
  margin: 300px auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledItem = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  padding-top: 30px;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: -1;
  opacity: 0.4;
`;

export const StyledHeadline = styled.h2`
  margin: 0;
  font-size: 3.6rem;
  text-align: center;
  font-weight: 800;
`;

export const StyledContent = styled.p`
  font-size: 6.4rem;
  font-weight: 900;
  margin: 0 auto 60px auto;
`;
