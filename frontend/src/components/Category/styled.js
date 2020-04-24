import styled from "styled-components";

const ItemWrapper = styled.div`
  width: 300px;
  height: 66px;
  text-align: center;
  padding: 10px 0;
  margin: 25px;
  font-size: 1.5rem;
  border: ${props => (props.voted ? "5px solid #16a085" : "2px solid gray")};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;

  -ms-grid-column: ${props => {
    return (props.order % 3) + 1;
  }};
  -ms-grid-row: ${props => {
    return parseInt(props.order / 3) + 1;
  }};

  @media (max-width: 1100px) {
    -ms-grid-column: ${props => {
      return (props.order % 2) + 1;
    }};
    -ms-grid-row: ${props => {
      return parseInt(props.order / 2) + 1;
    }};
  }

  &:active {
    border: ${props => (props.voted ? "5px solid #16a085" : "2px solid black")};
    background: ${props => (props.voted ? "white" : "#f1f2f6")};
  }

  @media only screen and (max-width: 464px) {
    font-size: 1.4rem;
  }
`;

const Text = styled.div`
  width: 100%;
  color: black;
`;

export { ItemWrapper, Text };
