import styled from "styled-components";

const ItemWrapper = styled.li`
  width: 100%;
  font-size: 1rem;
`;

const SummaryWrapper = styled.div`
  max-width: 80%;
`;

const SVGWrapper = styled.div`
  display: inline;
  margin-left: ${props => props.marginLeft};
`;

export { ItemWrapper, SummaryWrapper, SVGWrapper };
