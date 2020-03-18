import styled from "styled-components";

const ListWrapper = styled.div`
  text-align: center;
  padding: 0;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  @media (max-width: 1100px) {
    grid-template-columns: 350px 350px;
  }
  @media (max-width: 800px) {
    grid-template-columns: 350px;
  }
`;

export { ListWrapper };
