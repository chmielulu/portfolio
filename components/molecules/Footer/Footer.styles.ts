import styled from "styled-components";

export const StyledWrapper = styled.footer`
  margin-top: 110px;
  background: ${({ theme }) => theme.backgroundDarker};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  flex-direction: column;
`;

export const MadeWithLove = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 10px;
`;

export const SourceCode = styled.div`
  a {
    font-weight: 700;
    color: ${({ theme }) => theme.primary};

    :hover {
      text-decoration: underline;
    }
  }
`;
