import styled from "styled-components";

export const StyledWrapper = styled.header`
  margin: 0 0 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeadline = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 4.8rem;
`;

export const StyledSubHeadline = styled.h3`
  order: -1;
  margin: 0 0 8px;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.washLight};
`;
