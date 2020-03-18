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
  &:active {
    border: ${props => (props.voted ? "5px solid #16a085" : "2px solid black")};
    background: ${props => (props.voted ? "white" : "#f1f2f6")};
  }
`;

const Text = styled.div`
  width: 100%;
  color: black;
`;

export { ItemWrapper, Text };
