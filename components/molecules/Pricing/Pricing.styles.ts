import styled from "styled-components";

export const StyledWrapper = styled.section`
  width: 90%;
  max-width: 1260px;
  margin: auto;
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  //
  //@media (max-width: 1024px) {
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //}
`;
