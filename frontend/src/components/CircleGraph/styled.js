import styled from "styled-components";

const GrapWithDeschWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-contet: center;
  align-items: center;
  width: 100%;
`;

const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 10px 0;
  justify-content: center;
`;

const DescWrapper = styled.div`
  margin-top: 10px
  width: 100%;
  display: grid;
  grid-template-columns: 250px 250px;
  @media (max-width: 560px) {
    grid-template-columns: 300px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const DescText = styled.span`
  font-size: 1rem;

  @media only screen and (max-width: 464px) {
    display: 0.5rem;
  }
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.color};
  border-radius: 20px;
  margin-right: 10px;

  @media only screen and (max-width: 560px) {
    width: 15px;
    height: 15px;
  }
`;

export { GrapWithDeschWrapper, GraphWrapper, DescWrapper, ItemWrapper, DescText, Color };
