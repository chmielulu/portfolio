import styled from "styled-components";

export const StyledWrapper = styled.section`
  margin: 200px auto;
  width: 90%;
  max-width: 1115px;
`;

export const StyledImagesWrapper = styled.div`
  display: flex;
  gap: 30px;

  > span:first-of-type {
    width: 70%;
    border-radius: 30px;
  }

  > span:last-of-type {
    width: 30%;
    border-radius: 30px;
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
`;
