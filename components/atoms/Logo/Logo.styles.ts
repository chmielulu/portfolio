import styled from "styled-components";

export const StyledWrapper = styled.div`
  font-size: 2.4rem;
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.primary};
  }
`;
