import styled from "styled-components";

const ItemWrapper = styled.li`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 1.5rem;
  border: ${props => (props.voted ? "5px solid #16a085" : "2px solid gray")};
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  user-select: none;
  &:active {
    border: ${props => (props.voted ? "5px solid #16a085" : "2px solid black")};
  }
`;

export { ItemWrapper };
