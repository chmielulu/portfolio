import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-top: 100px;
  max-width: 1148px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 90%;
`;

export const StyledImageWrapper = styled.div`
  height: 94%;
  position: relative;
  aspect-ratio: 568 / 715;
  margin-top: auto;
`;

export const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeadline = styled.h1`
  margin: 0 0 20px;
  max-width: 570px;
  font-size: 6.4rem;
  font-weight: 900;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledSubHeadline = styled.h2`
  order: -1;
  font-size: 1.6rem;
  letter-spacing: 0.115em;
  font-weight: 600;
  margin: 0 0 20px;
`;

export const StyledParagraph = styled.p`
  line-height: 2.3;
  font-weight: 500;
  margin: 0;
  max-width: 472px;
`;

export const StyledScrollBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);

  svg {
    font-size: 2.8rem;
  }
`;
