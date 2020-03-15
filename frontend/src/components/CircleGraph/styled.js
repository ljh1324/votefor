import styled from "styled-components";

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
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DescText = styled.span`
  font-size: 1rem;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.color};
  border-radius: 20px;
  margin: 0 10px;
`;

export { GraphWrapper, DescWrapper, ItemWrapper, DescText, Color };
