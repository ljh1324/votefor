import styled from "styled-components";

const ItemWrapper = styled.li`
  width: 100%;
  font-size: 1.5rem;
  margin: 15px 0;
  cursor: pointer;
  user-select: none;
  color: ${props => (props.isClicked ? "black" : "gray")};
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;

  transition: all 0.9s ease;
  max-height: ${props => (props.isClicked ? "auto" : "0")};
  opacity: ${props => (props.isClicked ? "1" : "0")};
`;

const LineWrapper = styled.p`
  font-size: 1.3rem;
  color: black;
  margin: 10px 0;
`;

const SummaryWrapper = styled.div`
  max-width: 80%;
`;

const SVGWrapper = styled.div`
  display: inline;
  margin-left: ${props => props.marginLeft};
`;

const MarkWrapper = styled.div`
  padding: 5px;
  margin-right: 5px;
`;

const ThumbsWrapper = styled.div`
  display: flex;
  widh: 100%;
  justify-content: center;
`;

export {
  ItemWrapper,
  ContentsWrapper,
  SummaryWrapper,
  LineWrapper,
  SVGWrapper,
  ThumbsWrapper,
  MarkWrapper
};
