import styled from "styled-components";
import { rgba } from "polished";
import Image from "../../../atoms/Image/Image";

export const StyledWrapper = styled.div`
  display: flex;
  padding: 50px;
  border-radius: 40px;
  background: ${({ theme }) => rgba(theme.backgroundBlurred, 0.6)};
  backdrop-filter: blur(36px);
  max-width: 600px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    padding: 40px;
    border-radius: 20px;
    max-width: 500px;
  }
`;

export const StyledImage = styled(Image)`
  width: 140px;
  height: 140px;
  margin-right: 30px;

  @media (max-width: 1280px) {
    margin-right: 0;
    margin-bottom: 30px;
  }

  @media (max-width: 720px) {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const StyledRightWrapper = styled.div``;

export const StyledHeadline = styled.h3`
  font-size: 3.6rem;
  font-weight: 800;
  margin: 0 0 20px;

  @media (max-width: 720px) {
    font-size: 3rem;
  }
`;

export const StyledDescription = styled.p`
  margin: 0 0 20px;
  line-height: 2;
`;

export const StyledPricing = styled.div`
  font-weight: 700;
  font-size: 3rem;

  @media (max-width: 720px) {
    font-size: 2.4rem;
  }
`;
