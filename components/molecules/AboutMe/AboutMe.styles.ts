import styled from "styled-components";

export const StyledWrapper = styled.section`
  margin: 200px auto;
  width: 90%;
  max-width: 1115px;

  @media (max-width: 1024px) {
    margin: 80px auto;
    max-width: 800px;
  }

  @media (max-width: 720px) {
    max-width: 600px;
  }
`;

export const StyledImagesWrapper = styled.div`
  display: flex;
  gap: 30px;

  > img:first-of-type {
    width: 70%;
    height: auto;
    border-radius: 30px;
  }

  > img:last-of-type {
    width: 30%;
    height: auto;
    border-radius: 30px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    > img:first-of-type,
    > img:last-of-type {
      width: 100%;
      border-radius: 15px;
    }
  }
`;

export const StyledParagraph = styled.p`
  line-height: 2.3;
  font-size: 2.4rem;
  font-weight: 500;
  margin: 120px 0 0;
  text-align: justify;

  b {
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }

  @media (max-width: 720px) {
    font-size: 1.6rem;
    margin: 60px 0 0;
  }
`;
