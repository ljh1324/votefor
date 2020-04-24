import styled from "styled-components";

const ListWrapper = styled.div`
  text-align: center;
  padding: 0;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  display: -ms-grid;
  -ms-grid-columns: 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 350px 350px;
    -ms-grid-columns: 1fr 1fr;
  }
  @media (max-width: 734px) {
    display: block;
  }
`;

export { ListWrapper };
