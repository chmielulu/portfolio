import styled from "styled-components";
import Image from "../../atoms/Image/Image";

export const StyledWrapper = styled.div`
  padding-top: 100px;
  max-width: 1148px;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  width: 90%;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: unset;
    min-height: 100vh;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 720px) {
    min-height: 700px;
  }
`;

export const StyledImage = styled(Image)`
  height: 374px;
  width: 374px;
  position: relative;
  border-radius: 50%;
  object-fit: fill;

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 720px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  flex: 1;

  @media (max-width: 1024px) {
    margin-right: 0;
    align-items: center;
    max-width: 600px;
    margin-top: 60px;
    flex: unset;
  }
`;

export const StyledHeadline = styled.h1`
  margin: 0 0 20px;
  max-width: 570px;
  font-size: 6.4rem;
  font-weight: 900;

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1024px) {
    text-align: center;
    max-width: unset;
    font-size: 5rem;
  }

  @media (max-width: 720px) {
    font-size: 4rem;
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

  @media (max-width: 1024px) {
    max-width: unset;
    text-align: center;
  }
`;

export const StyledScrollBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  left: 50%;
  bottom: 40px;
  position: absolute;
  transform: translateX(-50%);
  cursor: pointer;

  svg {
    font-size: 2.8rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
