import styled from "styled-components";

export const StyledWrapper = styled.div`
  font-size: 2.4rem;
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 720px) {
    font-size: 1.8rem;
  }
`;
