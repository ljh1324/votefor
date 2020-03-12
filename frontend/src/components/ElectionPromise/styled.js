import styled from "styled-components";

const ItemWrapper = styled.li`
  width: 100%;
  font-size: 1.5rem;
  margin: 15px 0;
  cursor: pointer;
  user-select: none;
  color: ${props => (props.voted ? "black" : "gray")};

  &:hover {
    color: black;
  }
`;

const SummaryWrapper = styled.div`
  max-width: 80%;
`;

const SVGWrapper = styled.div`
  display: inline;
  margin-left: ${props => props.marginLeft};
`;

export { ItemWrapper, SummaryWrapper, SVGWrapper };
